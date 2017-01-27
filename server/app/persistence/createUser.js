var
  db = require('./connection'),
  table = 'users';

var createUser = function createUser(userdata) {
  var item = {
    email: {S: userdata.email},
    password: {S: userdata.password},
    id: {S: userdata.id}
  };

  console.log('item: ', item);

  return db
    .putItem({
      TableName: table,
      Item: item
    })
    .promise()
    .then(function(response) {
      return userdata;
    })
    .catch(function(err) {
      console.log('dynamo err: ', err);
      throw err;
    });
};

module.exports = createUser;
