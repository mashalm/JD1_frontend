var
  Promise = require('bluebird'),
  findByEmail = require('./users').findByEmail,
  bcrypt = require('bcrypt'),
  compare = Promise.promisify(bcrypt.compare),
  LocalStrategy = require('passport-local').Strategy

var localStrategy = new LocalStrategy(function(email, password, done) {
  findUserByEmail(email)
    .then(function(user) {
      return compare(password, user.password);
    })
    .then(function(match) {
      if (match)
        return this.user;

      return null;
    })
    .asCallback(done);
});

module.exports = localStrategy;
