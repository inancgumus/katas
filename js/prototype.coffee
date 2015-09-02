Foo = (who)->
  this.me = who

Foo.prototype.identify = ->
  "I am #{this.me}"  

foo1 = new Foo('foo1')
foo2 = new Foo('foo2')

foo2.speak = ->
  return "hello, #{this.identify()}."

console.log foo1.identify()
console.log foo2.identify()
### 
  can't call this!
  speak belongs only to foo2
###
# console.log foo1.speak() 
console.log foo2.speak()

console.log "foo1.constructor is Foo? #{foo1.constructor is Foo}"
console.log "foo1.constructor is foo2.constructor? #{foo1.constructor is foo2.constructor}"
console.log "foo1.prototype is Foo.prototype? #{foo1.__proto__ is Foo.prototype}"
console.log "foo1.__proto__ is Object.getPrototypeOf(foo1)? " +
  "#{foo1.__proto__ is Object.getPrototypeOf(foo1)}"
console.log "foo1.__proto__ is Foo.prototype? #{foo1.__proto__ is Foo.prototype}"
console.log "foo1.__proto__ is foo2.__proto__? " +
  "#{foo1.__proto__ is foo2.__proto__}"
