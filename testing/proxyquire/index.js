var proxyquire = require('proxyquire').noPreserveCache();

var mocks = {
  './dependentModule': {
    field: "a green field",
    
    hey: function() {
      return "maymay";
    }    
  }
};

var someModule = proxyquire("./someModule", mocks);

// console.log("ORIGINAL MODULE:");
// console.log(dependent.hey());
// console.log(dependent.field);

console.log("PROXYQUIRIFIED MODULE:");
console.log(someModule.giveInfo());

// .noPreserveCache() to load the original module
someModule = require("./someModule");

console.log("PROXYQUIRIFIED MODULE:");
console.log(someModule.giveInfo());
