define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var Item = Backbone.Model.extend({
    defaults: {
      part1: 'hello',
      part2: 'world',
      counter: '0'
    },

    initialize: function() {
      this.on('change:counter', this.log);
    },

    log: function(model, value, opts) {
      console.log('counter changed to '+ value +' !');
    }
  });

  return Item;

});
