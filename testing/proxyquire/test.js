var assert = require('assert');
var proxyquire = require('proxyquire').noPreserveCache();

// mocked api
var freemem = proxyquire("./freeMemoryMeasurer", {
  'os': {
    freemem: function() { 
      return 617619456; 
    }
  }
});

// real os api
// var freemem = require('./freeMemoryMeasurer');

it("should return the amount of free memory", function(){
  assert.equal(freemem(), 617619456);
});
