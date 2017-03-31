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
    join(__dirname, 'views/index')
  );
});

app.get('/audiologists', function(req, res) {
  res.render(
    join(__dirname, 'views/audiologists')
  );
});

app.get('/disclaimer', function(req, res) {
  res.render(
    join(__dirname, 'views/disclaimer')
  );
});

app.get('/results', function(req, res) {
  res.render(
    join(__dirname, 'views/results')
  );
});

app.get('/hearingtest', function(req, res) {
  res.render(
    join(__dirname, 'views/hearingtest')
  );
});

app.get('/howitworks', function(req, res) {
  res.render(
    join(__dirname, 'views/howitworks')
  );
});

app.get('/calibrateheadphones', function(req, res) {
  res.render(
    join(__dirname, 'views/calibrateheadphones')
  );
});

app.get('/pastscores', function(req, res) {
  res.render(
    join(__dirname, 'views/pastscores')
  );
});

app.get('/logout', function(req, res) {
  res.render(
    join(__dirname, 'views/fake-logout')
  );
});

app.get('/puretonetest', function(req, res) {
  res.render(
    join(__dirname, 'views/puretonetest')
  );
});

app.listen(3000);
