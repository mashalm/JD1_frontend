var
  join = require('path').join,
  register = require('./register'),
  validate = require('./validate'),
  forgotpassword = require('./forgotpassword'),
  changePassword = require('./changePassword'),
  findByEmail = require('./findByEmail'),
  router = require('express').Router(),
  passport = require('passport'),
  queryString = require('query-string');

router
  .route('/login')
  .get(function(req, res) {
    res.render(
      join(__dirname, '../views/login')
    );
  })
  .post(
    function(req, res, next) {
      if (req.isAuthenticated()) {
        console.log('already logged in');
        res.redirect('/');
      } else {
        next();
      }
    },
    passport.authenticate('local'),
    function(req, res) {
      console.log('successfully logged in');
      res.redirect('/');
    }
  );

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router
  .route('/register')
  .get(function(req, res) {
    res.render(
      join(__dirname, '../views/signup')
    );
  })
  .post(validate, function(req, res) {
    register(req.userdata)
      .then(function(user) {
        console.log('user has been registered: ', user);
        req.login(user, function(err) {
          if (err) {
            console.log('err: ', err);
            throw err;
          }

          res.status(200).send(user);
        });
      });
  });

router
  .route('/forgotpassword')
  .get(function(req, res) {
    res.render(
      join(__dirname, '../views/forgotpassword')
    );
  })
  .post(function(req, res) {
    var email = req.body.email;
    forgotpassword(email)
      .then(function(question) {
        question['email'] = email; // TODO clean
        var qs = queryString.stringify(question);

        res.redirect('forgotpassword1?' + qs);
      })
  });

router
  .route('/forgotpassword1')
  .get(function(req, res) {
    var email = req.query.email;
    var question = req.query.question;

    res.render(
      join(__dirname, '../views/forgotpassword1'),
      {
        email: email,
        question: question
      }
    );
  })
  .post(function(req, res) {
    var email = req.body.email;
    var answer = req.body.answer;

    findByEmail(email)
      .then(function(user) {
        if (user.security_answer === answer) {
          var qs = queryString.stringify({userId: user.id});
          res.redirect('changepassword?' + qs);
        }

        else {
          console.log('failed to change password');
          res.redirect('/');
        }
      })
  });

router
  .route('/changepassword')
  .get(function(req, res) {
    var id = req.query.userId;

    res.render(
      join(__dirname, '../views/changepassword'),
      {userId: id}
    )
  })
  .post(function(req, res) {
    var newPassword = req.body.password;
    var userId = req.body.userId;

    changePassword(userId, newPassword)
      .then(function() {
        console.log('password changed successfully');
      })
  })

module.exports = router;
