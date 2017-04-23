var
  express = require('express'),
  app = express(),
  join = require('path').join,
  bodyparser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  userRoutes = require('./users').routes,
  testRoutes = require('./testResults').routes,
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
app.use('/testResults', testRoutes);

app.get('/', function(req, res) {
  res.render(
    join(__dirname, 'views/index'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/audiologists', function(req, res) {
  res.render(
    join(__dirname, 'views/audiologists'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/disclaimer', function(req, res) {
  res.render(
    join(__dirname, 'views/disclaimer'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/results', function(req, res) {
  res.render(
    join(__dirname, 'views/results'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/hearingtest', function(req, res) {
  res.render(
    join(__dirname, 'views/hearingtest'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/howitworks', function(req, res) {
  res.render(
    join(__dirname, 'views/howitworks'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/calibrateheadphones', function(req, res) {
  res.render(
    join(__dirname, 'views/calibrateheadphones'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/pastscores', function(req, res) {
  res.render(
    join(__dirname, 'views/pastscores'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/logout', function(req, res) {
  res.render(
    join(__dirname, 'views/fake-logout')
  );
});

app.get('/puretonetest', function(req, res) {
  res.render(
    join(__dirname, 'views/puretonetest'),
    { isLoggedIn: req.isAuthenticated() }
  );
});

app.get('/shareResults', function(req, res) {
  res.render(
    join(__dirname, 'views/shareResults')
  );
});

app.get('/speechtest', function(req, res) {
  res.render(
    join(__dirname, 'views/speechtest')
  );
});

app.listen(3000);
