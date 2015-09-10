var passport = require ('passport');
var User = require ('../models/User');

var index = function(req, res) {
  res.render('index');
};

var store = function(req, res) {
  res.render('store');
};


module.exports = {
  index:  index,
  store: store
};
