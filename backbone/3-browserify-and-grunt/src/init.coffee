console.log 'starting...'

Backbone = require('backbone')
$ = require('jquery')
_ = require('underscore')
Backbone.$ = $

HelloView = require('./views/hello')
ExampleView = require('./views/example')

$ ->
  imgHello = new HelloView(el: '#helloImage')
  imgHello2 = new HelloView(el: '#helloImage2')
  imgExample = new ExampleView(el: '#exampleImage')
  imgExample2 = new ExampleView(el: '#exampleImage2')

  imgHello.attachToImage imgExample
  imgHello2.attachToImage imgExample2

  return
