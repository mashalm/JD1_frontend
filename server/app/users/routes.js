var
  join = require('path').join,
  register = require('./register'),
  validate = require('./validate'),
  router = require('express').Router(),
  passport = require('passport');

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

module.exports = router;
