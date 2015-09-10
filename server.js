// requiring/loading all of our dependencies/libaries
var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

// require modules for mongoose and passport
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// loading routes defined in the /routes folder
var routes = require('./routes/index');

// // // load mongoose and connect to a database
var mongoose = require('mongoose');
mongoose.connect('mongodb://USERNAME:PASSWORD@apollo.modulusmongo.net:27017/i6hojIxu');

// ​if (process.env.NODE_ENV === 'production') {
//  mongoose.connect('mongodb://admin:shachar@apollo.modulusmongo.net:27017/i6hojIxu');
//  app.use(session({
//    secret: 'keyboard cat',
//    saveUninitialized: false, // don't create session until something stored
//    resave: false, //don't save session if unmodified
//    store: new MongoStore({
//        url: 'mongodb://admin:shachar@apollo.modulusmongo.net:27017/i6hojIxu',
//        touchAfter: 24 * 3600 // time period in seconds
//    })
//  }));
// }


// start running express, and save the configurations for the express
// "app" with the variable `app`.
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/views',  express.static(__dirname + '/views'));

// auth middleware
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// passport config
var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// DEFINED ROUTES ARE IN HERE >> routes, ie './routes/index'
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});





module.exports = app;
