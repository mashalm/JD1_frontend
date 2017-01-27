var
  db = require('./connection'),
  table = 'users';

var findUserById = function(id) {
  var query = {
    TableName: table,
    Key: {S: id}
  };

  return db
    .getItem(query)
    .promise()
    .then(function(response) {
      console.log('response: ', response);
      return response;
    })
    .catch(function(err) {
      console.log('err', err);
      throw err;
    });
};

// var findUserById = function(id) {
//   console.log('executing find by id');
//   return findUser('id', id);
// }

var findUserByEmail = function(email) {
  console.log('executing find by email');
  var query = {
    TableName: table,
    ExpressionAttributeValues: {
      ":a": {S: email}
    },
    FilterExpression: 'email = :a'
  };

  return db
    .scan(query)
    .promise()
    .then(function(response) {
      console.log('response: ', response);
      return response;
    })
    .catch(function(err) {
      console.log('err', err);
      throw err;
    });
}

module.exports = {
  findUserById: findUserById,
  findUserByEmail: findUserByEmail
}
