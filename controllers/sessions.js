var passport = require ('passport');
var User = require ('../models/User');

// Handle the login submission
function logindo (req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect('secret');
    });
  };

  // Logout a currently authenticated user
function logout (req, res) {
  req.logout();
  res.redirect('/');
};



module.exports = {
  logindo: logindo,
  logout: logout
};
