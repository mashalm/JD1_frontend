var
  Promise = require('bluebird'),
  bcrypt = require('bcrypt'),
  hash = Promise.promisify(bcrypt.hash),
  updateUserPassword = require('../persistence').updateUserPassword;

var changePassword = function(userId, newPassword) {
  console.log('change password: ', userId);

  return hash(newPassword, 10)
    .then(function(password) {
      return updateUserPassword(userId, password);
    });
}

module.exports = changePassword;
