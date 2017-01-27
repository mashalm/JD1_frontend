var
  app = require('express')(),
  bodyParser = require('body-parse'),
  userRoutes = require('./users');

app.use(bodyParser.json())

app.use('/users', userRoutes);

app.listen(3000);
