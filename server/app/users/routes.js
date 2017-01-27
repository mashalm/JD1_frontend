var
  register = require('./register'),
  // login = require('./login'),
  validation = require('./validation'),
  router = require('express').Router(),
  passport = require('passport');

router.post('/login', passport.authenticate('local'));

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).send();
});

router.post('/register', validation, function(req, res) {
  register(req.userdata)
    .then(function(user) {
      req.login(user, function(err) {
        if (err)
          console.log('err: ', err);
      })
    })
});

module.exports = router;
