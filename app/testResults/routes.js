var
  router = require('express').Router(),
  attr = require('dynamodb-data-types').AttributeValue,
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
    console.log('req.user: ', req.user);

    var
      user = attr.unwrap(req.user.Item),
      testData = req.testData,
      userId = user.id;

    testData.userId = userId;

    console.log('typeof saveTestResult: ', typeof saveTestResult);
    console.log('testData: ', testData);

    saveTestResult(testData)
      .then(function(result) {
        res.status(200).send(result);
      });
  });


module.exports = router;
