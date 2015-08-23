todoApp.Todo = Backbone.Model.extend({

  defaults: {
    title: "",
    complete:  false
  }, 

  initialize: function() {
    this.on("change", function() { 
      this.save(); 
    });
  },

  toggleStatus: function() {
    this.set("complete", ! this.get("complete"));
  }
});

todoApp.Todos = Backbone.Collection.extend({

  model: todoApp.Todo,

  url: 'api/todos'

});
