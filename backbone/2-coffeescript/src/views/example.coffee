define [
  'jquery'
  'underscore'
  'backbone'
], ($, _, Backbone) ->

  Backbone.View.extend

    events: 'click': ->
      console.log '#' + @$el.attr('id'), 'clicked'
      
      @$el.css 'border-radius', @_calculateRadius()

      @_fireRadiusChanged()

    initialize: ->
      Backbone.trigger 'image:load', this

    _calculateRadius: ->
      if @$el.css('border-radius') == '0px' then '50%' else '0px'

    _fireRadiusChanged: ->
      Backbone.trigger 'image:radius:changed',
        view  : this
        radius: @$el.css('border-radius')
        id    : @cid
