describe("Todos List View", function() {
  
  beforeEach(function() {
    this.todos = new todoApp.Todos([
      {title: "Todo 1"},
      {title: "Todo 2"}
    ]);

    this.list = new todoApp.TodosList({collection: this.todos});
  });

  it("render() should return the view object", function() {
    this.list.render().should.equal(this.list);
  });
  
  it("should render as an unordered list", function() {
    this.list.render().el.nodeName.should.equal("UL");
  });
  
  it("should include list items for all models in collection", function() {
    this.list.render();
    this.list.$el.find("li").should.have.length(2);
  });

});
