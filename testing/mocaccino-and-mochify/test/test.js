var assert = require("assert");
var module = require("../mymodule");
var dom = require("../dommodule");

describe('hello', function() {
  it('should equal to true', function() {
    assert.equal(module.response, true);
  });

  it('should have a document.body', function() {
    assert.ok(dom.body);
  });
});
