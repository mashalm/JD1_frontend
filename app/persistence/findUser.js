var
  db = require('./connection'),
  attr = require('dynamodb-data-types').AttributeValue,
  table = 'users';

var findUserById = function(id) {
  var query = {
    TableName: table,
    Key: {
      id: {S: id}
    }
  };

  return db
    .getItem(query)
    .promise()
    .then(function(response) {
      return response;
    })
    .catch(function(err) {
      console.log('err', err);
      throw err;
    });
};

var findUserByEmail = function(email) {
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
      if (response.Count === 1)
        return attr.unwrap(response.Items[0]);

      else throw new Error('no user with that email exists');
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
