var
  db = require('./connection'),
  table = 'users';

var saveTestResult = function saveTestResult(testResult) {
  var item = {
    score: {S: testResult.score},
    userId: {S: testResult.userId},
    created: {S: testData.created}
  };

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
}

module.exports = saveTestResult;
