var
  express = require('express'),
  app = express(),
  join = require('path').join,
  bodyparser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  userRoutes = require('./users').routes,
  passport = require('./sessions');

app
  .use(bodyparser.urlencoded({ extended: false }))
  .use(cors())
  .use(session({
    secret: 'tmp',
    resave: false,
    saveUninitialized: false
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use(express.static(join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/users', userRoutes);

app.get('/', function(req, res) {
  res.render(
    join(__dirname, 'views/index')
  );
});

app.listen(3000);
