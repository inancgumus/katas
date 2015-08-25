var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var fs = require('fs');

describe('mocha with a local jquery file tests', function () {

  jsdom({
    src: fs.readFileSync('jquery.js', 'utf-8')
  });

  it('should load jquery with version 2.1.4', function() {
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
