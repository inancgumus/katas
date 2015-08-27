var mathGenius = require('./mathGenius');
var view = require('./view');
var $ = require('jquery');

$(function() {
  view.init(mathGenius);
  view.triggerClick();
});
