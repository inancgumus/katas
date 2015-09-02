Foo = (who)->
  this.me = who

Foo.prototype.identify = ->
  "I am #{this.me}"  

foo1 = new Foo('foo1')
console.log foo1.identify()

###
  SHADOWING
  DON'T DO IT!
###
foo1.identify = ->
  return "Hello, #{Foo.prototype.identify.call(this)}."

console.log foo1.identify()
