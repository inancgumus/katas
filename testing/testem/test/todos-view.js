describe("Todo List Item View", function() {

  beforeEach(function() {
    this.todo = new todoApp.Todo({title: "Summary"});
    this.item = new todoApp.TodoListItem({model: this.todo});
    this.save_stub = sinon.stub(this.todo, "save");
  });

  afterEach(function() {
    this.save_stub.restore();
  });

  it("render() should return the view object", function() {
    this.item.render().should.equal(this.item);
  });

  it("should render as a list item", function() {
    this.item.render().el.nodeName.should.equal("LI");
  });

  describe("Template", function() {
    
    beforeEach(function(){
      this.item.render();
    });

    it("should contain the todo title as text", function() {
      this.item.$el.text().should.have.string("Summary");
    });

    it("should include a label for the status", function() {
      this.item.$el.find("label").should.have.length(1);
    });

    it("should include an <input> checkbox", function() {
      this.item.$el.find("label>input[type='checkbox']").should.have.length(1);
    });

    it("should be clear by default (for 'pending' todos)", function() {
      this.item.$el.find("label>input[type='checkbox']").is(":checked").should.be.false;
    });

    it("should be set for 'complete' todos", function() {
      this.todo.set("complete", true);
      this.item.render();
      this.item.$el.find("label>input[type='checkbox']").is(":checked").should.be.true;
    });

    describe("Model Interaction", function() {

      it("should update model when checkbox clicked", function() {

        $("<div>").attr("id", "fixture").css("display", "none").appendTo("body");
        
        this.item.render();
        
        $("#fixture").append(this.item.$el);
        
        this.item.$el.find("input").click();
        this.todo.get('complete').should.be.true;
        
        $("#fixture").remove();

      });

    });

  });

});
