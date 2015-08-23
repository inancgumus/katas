describe("Persistence", function() {

  beforeEach(function() {
    this.todo = new todoApp.Todo();
    this.save_stub = sinon.stub(this.todo, "save");
  });

  afterEach(function() {
    this.save_stub.restore();
  });

  it("should update server when title is changed", function() {
    this.todo.set("title", "New Summary");
    this.save_stub.should.have.been.calledOnce;
  });

  it("should update server when status is changed", function() {
    this.todo.set('complete', true);
    this.save_stub.should.have.been.calledOnce;
  });
  
});
