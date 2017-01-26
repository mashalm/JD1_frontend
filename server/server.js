var
  app = require('express')(),
  bodyParser = require('body-parse');
  loginRoutes = require('./')

app.use(bodyParser.json())


