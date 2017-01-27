var
  db = require('./connection'),
  table = 'users';

var createUser = function createUser(userdata) {
  var item = {
    email: {S: userdata.email},
    password: {S: userdata.password},
    id: {S: userdata.id}
  };

  console.log('sending dynamo request');

  return db
    .putItem({
      TableName: table,
      Item: item
    })
    .promise()
    .then(function(response) {
      console.log('dynamo response: ', response);
    });
};

module.exports = createUser;
