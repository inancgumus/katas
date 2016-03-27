describe("dom", function() {
  var dommer;

  beforeEach(function() {
    dommer = new el()
  })

  it("is instantiable", function() {
    expect(new el()).to.not.equal(new el())
  })

  it("can create a div element", function() {
    expect(dommer.create('div')).to.exist
  })

  it("can position an element", function() {
    var $el = dommer.create('div')
    dommer.pos({
      top: "34px",
      left: "56px"
    })
    expect($el.style.top).to.equal("34px")
    expect($el.style.left).to.equal("56px")
  })

  it("can attach an $el to document.body", function() {
    $el = dommer.create('div', {
      id: "i-am-here"
    })
    dommer.appendToBody()
    expect(document.getElementById("i-am-here")).to.not.null
  })
})
