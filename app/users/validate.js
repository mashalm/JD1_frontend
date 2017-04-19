var validate = function(req, res, next) {
  console.log('req.body: ', req.body);

  var userdata = {
    email: req.body.email,
    password: req.body.password,
    security_question: req.body.security_question,
    security_answer: req.body.security_answer,
    birth_year: req.body.birth_year || -1
  };

  req.userdata = userdata;
  next();
}

module.exports = validate;
