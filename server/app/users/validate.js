var validate = function(req, res, next) {
  var userdata = {
    email: req.body.email,
    password: req.body.password
  };

  req.userdata = userdata;
  next();
}

module.exports = validate;
