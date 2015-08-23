describe("Collection's Interaction with REST API", function() {
  
  it("should load using the API", function() {
    
    this.ajax_stub = sinon.stub($, "ajax").yieldsTo("success", [
      { id: 1, title: "Mock Summary 1", complete: false },
      { id: 2, title: "Mock Summary 2", complete: true  }
    ]);

    this.todos = new todoApp.Todos();
    
    this.todos.fetch();
    
    this.todos.should.have.length(2);
    this.todos.at(0).get('title').should.equal("Mock Summary 1");
    this.todos.at(1).get('title').should.equal("Mock Summary 2");
    
    this.ajax_stub.restore();
  });

});
