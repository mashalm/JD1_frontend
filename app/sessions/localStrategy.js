var
  Promise = require('bluebird'),
  findUserByEmail = require('../users').findByEmail,
  bcrypt = require('bcrypt'),
  compare = Promise.promisify(bcrypt.compare),
  LocalStrategy = require('passport-local').Strategy;

var localStrategy = new LocalStrategy({usernameField:"email"}, function(email, password, done) {

  findUserByEmail(email)
    .then(function(user) {
      return {
        user: user,
        match: compare(password, user.password)
      };
    })
    .then(function(result) {
      return result.match.then(function(comparison) {
        if (comparison)
          return result.user;

        console.log('passwords do not match');
        return null; 
      });
    })
    .asCallback(done)
    .catch(function(err) {
      console.log('err', err);
      throw err;
    });
});

module.exports = localStrategy;
