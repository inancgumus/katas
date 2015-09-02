Foo = (who)->
  this.me = who

Foo.prototype.identify = ->
  "I am #{this.me}"  

Foo.prototype.speak = ->
  return "Hello, #{this.identify()}."

foo1 = new Foo('foo1')
foo2 = new Foo('foo2')

# foo1.identify() -> Foo.prototype.identify.call(this)
console.log foo1.speak()
console.log foo2.speak()
