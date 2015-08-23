describe("Todo Model", function(){

  describe("Initialization", function() {

    beforeEach(function() {
      this.todo = new todoApp.Todo();
    });

    it("should default the status to 'pending'",function() {
      this.todo.get('complete').should.be.false;
    });

    it("should default the title to an empty string",function() {
      this.todo.get('title').should.equal("");
    });
    
  });

})
