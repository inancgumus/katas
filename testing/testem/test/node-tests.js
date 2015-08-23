console.log(alo);
var jQuery   = jQuery   || require("jquery");
var _        = _        || require("underscore");
var Backbone = Backbone || require("backbone");
Backbone.$   = jQuery;

// test to see if we’re running in the node.js environment 
// instead of a web browser
if (typeof exports !== 'undefined' && this.exports !== exports) {

  global.jQuery = require("jquery");
  global.$ = jQuery;

  global.chai = require("chai");
  global.sinon = require("sinon");
  chai.use(require("sinon-chai"));

  global.jsdom = require("jsdom").jsdom;
  var doc = jsdom("<html><body></body></html>");

  global.window = doc.createWindow();

}

