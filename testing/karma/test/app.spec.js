describe("app.js", function() {
  it("exists", function() {
    expect(app).to.not.null
  })

  it("greets with the default welcome text if otherwise specified", function() {
    expect(app().greet()).to.equal('hello world')
  })

  it("greets with a custom message", function() {
    var localApp = app({
      text: 'hello my world'
    })
    expect(localApp.greet()).to.equal('hello my world')
  })

})
