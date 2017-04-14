var
  router = require('express').Router(),
  attr = require('dynamodb-data-types').AttributeValue,
  // doc = require('dynamodb-doc'),
  saveTestResult = require('./saveTestResult');

var auth = function(req, res, next) {
  if (req.isAuthenticated())
    next();
  else
    res.redirect('/users/login');
};

var validate = function(req, res, next) {
  var testData = {
    frequencies: req.body.frequencies
    // TODO extract correct values
  };

  console.log('validating test data');

  req.testData = testData;
  next();
};

var calculateScore = function(req, res, next) {
  req.testData.score = 0; // TODO score properly
  next();
}

router
  .route('/')
  .post(auth, validate, calculateScore, function(req, res) {

    var
      user = attr.unwrap(req.user.Item),
      testData = req.testData,
      userId = user.id;

    testData.userId = userId;
    console.log('testData: ', testData);

    saveTestResult(testData)
      .then(function(result) {
        console.log('result: ', result);
        res.status(200).json({});
      })
      .catch(function(e) {
        res.status(500).json({});
      });
  });


module.exports = router;
