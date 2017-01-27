var
  app = require('express')(),
  bodyparser = require('body-parser'),
  session = require('express-session'),
  userRoutes = require('./users'),
  passport = require('./sessions');

app
  .use(bodyparser.urlencoded({ extended: false }))
  .use(session({
    secret: 'tmp',
    resave: false,
    saveUninitialized: false
  }))
  .use(passport.initialize())
  .use(passport.session());

app.use('/users', userRoutes);

app.listen(3000);
