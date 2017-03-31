var
  router = require('express').Router();

var auth = function(req, res, next) {
  if (req.isAuthenticated())
    next();
  else
    res.redirect('/users/login');
};

var validate = function(req, res) {
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
  .post(auth, validate, calculateScore, saveTestResult);


module.exports = router;
