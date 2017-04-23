var
  db = require('./connection'),
  table = 'users';

var changePassword = function(userId, password) {
  var
    key = {
      id: {S: userId}
    }

  return db
    .updateItem({
      TableName: table,
      Key: key,
      UpdateExpression : "SET #attrName = :attrValue",
      ExpressionAttributeNames : {
        "#attrName" : "password"
      },
      ExpressionAttributeValues : {
        ":attrValue" : {
          "S" : password
        }
      }
    })
    .promise()
    .catch(function(err) {
      console.log('dynamo err: ', err);
      throw err;
    });
};

module.exports = changePassword;
