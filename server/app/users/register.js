var
  Promise = require('bluebird'),
  uuid = require('uuid/v4'),
  bcrypt = require('bcrypt'),
  hash = Promise.promisify(bcrypt.hash),
  createUser = require('../persistence').createUser;

var register = function(userdata) {
  userdata.id = uuid();

  return hash(userdata.password, 10)
    .then(function(password) {
      userdata.password = password;

      return createUser(userdata);
    })
    .then(function(user) {
      if (user.password)
        delete user.password;

      return user;
    });
};

module.exports = register;
