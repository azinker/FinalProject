var Resource = require('../models/Resource');

var index = function(req, res) {
  res.render('index');
};

var contact = function(req, res) {
  res.render('contact');
};

var store = function(req, res) {
  res.render('store');
};


module.exports = {
  index:  index,
  contact: contact,
  store: store
};
