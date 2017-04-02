var
  db = require('./connection'),
  table = 'users';

var saveTestResult = function saveTestResult(testResult) {
  // var item = {
  //   score: {S: testResult.score},
  //   userId: {S: testResult.userId},
  //   created: {S: testData.created}
  // };

  var key = {
    id: {S: testResult.userId}
  };

  console.log('persistence: testResult: ', testResult);

  return db
    .updateItem({
      TableName: table,
      Key: key,
      UpdateExpression : "SET #attrName = list_append(#attrName, :attrValue)",
      ExpressionAttributeNames : {
        "#attrName" : "testResults"
      },
      ExpressionAttributeValues : {
        ":attrValue" : [testResult]
      }
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
