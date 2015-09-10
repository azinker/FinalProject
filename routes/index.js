// import Express and the Express Router
var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();

// import controllers for resources
var resourcesController = require('../controllers/resources');
var sessionsController = require('../controllers/sessions');
var usersController = require('../controllers/users');

// define routes for our application, and send them to route handlers



router.get('/', resourcesController.index);
router.get('/store', resourcesController.store);


//  AUTHORIZATION ROUTES

//Display register Form DONE
router.get('/register', usersController.registerdo);

// Handle the submission of the Register Form - ROUTE DONE
router.post('/register', usersController.register);

//Secret View With middlewear for user loggedin DONE
router.get('/secret', isLoggedIn, usersController.secret);

// Handle the Login Submission - ROUTE DONE
router.post('/', passport.authenticate('local', {failureRedirect: '/'}), sessionsController.logindo);

// Logout a currently authenticated user - ROUTE DONE
router.get('/logout', sessionsController.logout);


// middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the login page
  res.redirect('/');
}

module.exports = router;
