var chai = require('chai');
var expect = chai.expect;
var Person = require('../src/Person');

describe('Person', function () {
  it('should say John when name is John', function () {
    expect(new Person('John').name).to.equal('John');
  });

  it('should say Paul when surname is Paul', function() {
    expect(new Person('John', 'Paul').surname).to.equal('Paul');
  });

  it('should say John Paul as a fullname', function() {
    expect(new Person('John', 'Paul').fullname()).to.equal('John Paul');
  });

  it('should say only John as fullname when there is no surname', function() {
    expect(new Person('John').fullname()).to.equal('John');
  });
});
