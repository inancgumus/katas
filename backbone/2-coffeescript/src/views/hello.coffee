define [
  'jquery'
  'underscore'
  'backbone'
], ($, _, Backbone) ->

  Backbone.View.extend

    initialize: ->
      @listenTo Backbone, 'image:radius:changed', @onImageRadiusChange

    onImageRadiusChange: (image) ->
      if @attachedImage == image.view
        console.log 'image radius changed to ' + image.radius

    attachToImage: (image) ->
      @attachedImage = image
