var
  passport = require('passport'),
  localStrategy = require('./localStrategy'),
  findById = require('../users').findById;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  findById(id)
    .asCallback(done)
    .catch(done);
});

passport.use(localStrategy);

module.exports = passport;
