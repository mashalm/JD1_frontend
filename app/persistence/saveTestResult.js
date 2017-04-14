var
  db = require('./connection'),
  table = 'users',
  attr = require('dynamodb-data-types').AttributeValue;
  // Promise = require('bluebird')
  // Doc = require('dynamodb-doc'),
  // docClient = Doc.DynamoDB();
  // docClient = new Doc.DynamoDB();

var saveTestResult = function saveTestResult(testResult) {
  // var item = {
  //   score: {S: testResult.score},
  //   userId: {S: testResult.userId},
  //   created: {S: testData.created}
  // };

  var key = {
    id: {S: testResult.userId}
  };

  // var params = {
  //   TableName: table,
  //   Key: key,
  //   // UpdateExpression : "SET #attrName = list_append(#attrName, :attrValue)",
  //   UpdateExpression : "SET #attrName = list_append(#attrName, :attrValue)",
  //   ExpressionAttributeNames : {
  //     "#attrName" : "testResults"
  //   },
  //   ExpressionAttributeValues : {
  //     ":attrValue" : [testResult]
  //   }
  // };
  //
  // docClient.updateItem(params, pfunc);
  // return Promise.resolve({msg: '\\o/'})

  return db
    .updateItem({
      TableName: table,
      Key: key,
      UpdateExpression : "SET #attrName = list_append(#attrName, :attrValue)",
      // UpdateExpression : "ADD #attrName :attrValue",
      ExpressionAttributeNames : {
        "#attrName" : "testResults"
      },
      ExpressionAttributeValues : {
        ":attrValue" : {
          L: [{
            M: {
              score: {S: '0'}, // testResult.score
              created: {S: 'now'}//testResult.created}
            }
          //   created: {
          //     S: testResult.created
          //   }
          }]
        }
      }
    })
    .promise()
    .then(function(response) {
      return response;
    })
    .catch(function(err) {
      console.log('dynamo err: ', err);
      throw err;
    });
}

module.exports = saveTestResult;
