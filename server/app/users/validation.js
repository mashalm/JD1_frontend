var validation = function(req, res, next) {
  var userdata = {
    email: req.body.email,
    password: req.body.password
  };

  req.userdata = userdata;
  next();
}

module.exports = validation;
