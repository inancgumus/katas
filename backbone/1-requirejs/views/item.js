define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/templates/item.html'
], function($, _, Backbone, itemTmpl) {
  
  var ItemView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(itemTmpl),

    events: {
      'click': 'marker'
    },

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    marker: function(e) {
      $(this.el).css('background', 'gray');
    }
  });

  return ItemView;

});
