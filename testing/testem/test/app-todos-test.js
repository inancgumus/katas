var should = chai.should();

describe("Application", function() {

  it("creates a global variable for the namespace", function() {
    should.exist(todoApp);
  })

});
