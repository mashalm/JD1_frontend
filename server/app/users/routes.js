var
  // register = require('./register'),
  // login = require('./login'),
  uuid = require('uuid/v4'),
  router = require('express').Router(),
  passport = require('passport');

router.post('/login', passport.authenticate('local'));

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).send();
});

router.post('/register', function(req, res) {
  // var id = uuid();
  // console.log('id: ', id);
  // res.status(200).send(req.body);
});

module.exports = router;
