Foo = (who)->
  this.me = who

Foo.prototype.identify = ->
  "I am #{this.me}"  

# Bar extends Foo
Bar = (who)->
  Foo.call this, who

Bar.prototype = Object.create Foo.prototype

Bar.prototype.speak = ->
  return "Hello, #{this.identify()}."

bar1 = new Bar "bar1"
bar2 = new Bar "bar2"

console.log bar1.speak()
console.log bar2.speak()
