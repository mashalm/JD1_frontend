var
  register = require('./register'),
  validate = require('./validate'),
  router = require('express').Router(),
  passport = require('passport');

router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log('user successfully logged in');
  res.status(200).send('user successfully logged in');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).send();
});

router.post('/register', validate, function(req, res) {
  register(req.userdata)
    .then(function(user) {
      console.log('user has been registered: ', user);
      req.login(user, function(err) {
        if (err) {
          console.log('err: ', err);
          throw err;
        }

        res.status(200).send();
      });
    });
});

module.exports = router;
