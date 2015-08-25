var jsdom = require('mocha-jsdom');
var rerequire = jsdom.rerequire;
var expect = require('chai').expect;
var fs = require('fs');

describe('mocha with node.js jquery tests', function () {
  var $;
  jsdom();

  beforeEach(function () {
    $ = rerequire('jquery');
  });

  it('should load jquery in node.js with version 2.1.4', function() {
    expect($.fn.jquery).eql('2.1.4');
  });

  it('should have the window', function() {
    expect(window).to.exist;
  });

  it('should set div background to green', function () {
    document.body.innerHTML = '<div id="frodo" />';
    $("div#frodo").css("background", "green");
    expect($("div#frodo").css("background")).to.eql("green");
  });

});
