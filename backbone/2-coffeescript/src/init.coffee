require [
  'backbone'
  'views/example'
  'views/hello'
], (Backbone, ExampleView, HelloView) ->
  
  console.log 'starting...'
  
  imgHello = new HelloView(el: '#helloImage')
  imgHello2 = new HelloView(el: '#helloImage2')
  imgExample = new ExampleView(el: '#exampleImage')
  imgExample2 = new ExampleView(el: '#exampleImage2')
  
  imgHello.attachToImage imgExample
  imgHello2.attachToImage imgExample2
