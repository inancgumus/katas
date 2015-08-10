define([
  'underscore',
  'backbone',
  'models/item'
], function(_, Backbone, Item) {
  
  var List = Backbone.Collection.extend({
    model: Item,

    initialize: function() {
      this.on('add', this.onAdd);
      this.counter = 0;
    },

    onAdd: function(model, collection, opts) {
      model.set('counter', ++this.counter);
      console.log('onAdd called. counter='+ this.counter);
    }
  });

  return List;

});
