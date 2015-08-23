var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

describe('mocha tests', function () {

  jsdom();

  it('has document', function () {
    var div = document.createElement('div');
    div.id = 'aDiv';
    document.body.appendChild(div);
    expect(div.nodeName).eql('DIV');
  });

  it('should not have the div from previous test', function () {
    expect(document.getElementById('aDiv')).to.not.exist;
  });

});
