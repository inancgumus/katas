todoApp.TodosList = Backbone.View.extend({

  tagName: "ul",

  initialize: function() {
    this.collection.on("add", this.addOne, this);
  },

  render: function() {
    this.addAll();
    return this;
  },

  addAll: function() {
    this.collection.each(this.addOne, this);
  },

  addOne: function(todo) {
    var item = new todoApp.TodoListItem({model: todo});
    this.$el.append(item.render().el);
  }

});
