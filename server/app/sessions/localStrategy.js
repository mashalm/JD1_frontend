var
  Promise = require('bluebird'),
  findUserByEmail = require('../users').findByEmail,
  bcrypt = require('bcrypt'),
  compare = Promise.promisify(bcrypt.compare),
  LocalStrategy = require('passport-local').Strategy;

var localStrategy = new LocalStrategy({usernameField:"email"}, function(email, password, done) {
  console.log('executing local strategy');
  findUserByEmail(email)
    .then(function(user) {
      console.log('found user: ', user);
      return compare(password, user.password);
    })
    .then(function(match) {
      if (match)
        return this.user;

      return null;
    })
    .asCallback(done)
    .catch(function(err) {
      console.log('err', err);
      throw err;
    })
});

module.exports = localStrategy;
