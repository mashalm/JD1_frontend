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
  if (!req.body || !req.body.score) {
    res.status(400).send({
      msg: 'error sending test score'
    });
  }

  var score = req.body.score;

  var testData = {
    score: score
  };

  req.testData = testData;

  next();
};

router
  .route('/')
  .get(auth, function(req, res) {
    var
      user = attr.unwrap(req.user.Item);

    res.status(200).send(user.testResults);
  })
  .post(auth, validate, function(req, res) {

    var
      user = attr.unwrap(req.user.Item),
      testData = req.testData,
      userId = user.id;

    testData.userId = userId;

    saveTestResult(testData)
      .then(function(result) {
        res.status(200).json({});
      })
      .catch(function(e) {
        res.status(500).json({});
      });
  });


module.exports = router;
