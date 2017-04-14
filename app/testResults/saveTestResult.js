var persist = require('../persistence').saveTestResult;

var saveTestResult = function(testResult) {
  testResult.created = Date.now();

  console.log('running saveTestresult');

  return persist(testResult)
    .then(function(result) {
      return result;
    });
};

module.exports = saveTestResult;
