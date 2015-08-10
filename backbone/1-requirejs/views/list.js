define([
  'jquery',
  'underscore',
  'backbone',
  'models/list',
  'models/item',
  'views/item',
  'text!views/templates/list.html'
], function($, _, Backbone, List, Item, ItemView, listTmpl) {

  var ListView = Backbone.View.extend({
    template: _.template(listTmpl),

    initialize: function() {
      this.collection.on('add', this.render, this);
    },

    render: function() {
      this.$el.empty();
      this.collection.each(this.renderItem, this);

      return this;
    },

    renderItem: function(item) {
      var itemView = new ItemView({ model: item });
      this.$el.append(itemView.render().el);
    }
  });

  return ListView;

});
