var passport = require ('passport');
var User = require ('../models/User');


//Register View
function registerdo (req, res) {
  res.render('register');
};


// Handle the submission of the Register Form
function register (req, res) {
  User.register(new User({username: req.body.username, name: req.body.name}), req.body.password, function(err, user) {
    if (err) return res.render('register', {user: user});
    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
};



// Secret Page
function secret (req, res) {
  res.render('secret', {user: req.user});
};

module.exports = {
  register: register,
  secret: secret,
  registerdo: registerdo
};
