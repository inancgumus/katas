todoApp.TodoListItem = Backbone.View.extend({
  
  tagName: "li",

  template: _.template(
    "<label>"
  +   "<input type='checkbox' <% if (complete) print('checked') %>/>"
  +   " <%= title %> "
  + "</label>"),

  events: {
    "click input": "statusChanged"
  },

  statusChanged: function() {
    this.model.toggleStatus();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
