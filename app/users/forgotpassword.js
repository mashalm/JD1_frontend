var
  findByEmail = require('./findByEmail');

var forgotpassword = function(email) {
  return findByEmail(email)
    .then(function(user) {
      return {
        question: user.security_question
      };
    });
}

module.exports = forgotpassword;
