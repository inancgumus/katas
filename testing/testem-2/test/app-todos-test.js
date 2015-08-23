/*
 * Sorry about the following, but we need to know if
 * we're running under node.js or in the browser. That
 * turns out to be really hard to determine reliably,
 * but the following code should work in all but the
 * really really extreme cases.
 */

if (typeof exports !== 'undefined' && this.exports !== exports) {
	
	/*
	 * Here's why the node.js environment needs special
	 * treatment: 
	 *
	 *   -  We need to identify dependencies so node.js
	 *      can load the necessary libraries. (In the
	 *      browser, these will be handled by explicit
	 *      includes, either of individual script files
	 *      or of concatenated, possibly minified versions.)
	 *
	 *   -  Node.js doesn't have a DOM into which we
	 *      can insert our views to test interactions.
	 *      We can simulate a DOM with jsdom.
	 *
	 */

	global.jsdom 		= require("jsdom").jsdom;
	global.document = jsdom("<html><body></body></html>");
	global.window 	= document.defaultView;
	global.$				= require("jquery")(window);

	global._        = require("underscore");
	global.Backbone = require("backbone");
	Backbone.$   		= $;

  global.chai 		= require("chai");
  global.sinon 		= require("sinon");
  chai.use(require("sinon-chai"));
}

var should = chai.should();

if (typeof todoApp === "undefined") todoApp = {};

/*
 * The fundamental model for the app is a Todo. The only
 * action supported in this demo is toggling the status 
 * (e.g. from pending to complete or vice versa).
 */
 
todoApp.Todo = Backbone.Model.extend({
  defaults: {
    title:    "",
    complete: false
  },
  initialize: function() {
    // keep the server updated on changes
    // note: can't use the more concise
    //           this.on("change",this.save);
    //       because it creates an infinite loop
    //       in backbone.
    this.on("change", function(){ this.save(); });
  },
  toggleStatus: function() {
    // invert the value of the complete attribute
    this.set("complete",!this.get("complete"));
  }
})

/*
 * The complete list of todos is stored in a
 * collection, naturally. All we need to specify
 * is the URL of the REST API to access todos.
 */

todoApp.Todos = Backbone.Collection.extend({
  model: todoApp.Todo,
  url:   "api/todos"
})

/*
 * As a quick and simple demo, we'll just render each
 * todo as a list item. The item text consists of
 * the todo title, and we'll add a checkbox to
 * represent the status.
 *
 * We hook events that catch changes to the input
 * checkbox so we can update the model appropriately.
 *
 * We also watch for changes in the model so we can
 * update (or remove) the view as needed.
 */
 
todoApp.TodoListItem = Backbone.View.extend({
  tagName: "li",
  template: _.template(
      "<label>"
    +   "<input type='checkbox' <% if(complete) print('checked') %>/>"
    +   " <%= title %> "
    + "</label>"),
  events: {
    "click input": "statusChanged"
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  statusChanged: function() {
    this.model.toggleStatus();
  },
  initialize: function() {
    this.model.on("change", this.render, this);
    this.model.on("destroy", this.remove, this);
  },
  remove: function() {
    this.$el.remove();
  }
})

/* 
 * Define a view for the list of all todos. We
 * watch for changes to the collection so we can
 * update the view appropriately.
 */

todoApp.TodosList = Backbone.View.extend({
  tagName: "ul",
  initialize: function() {
    this.collection.on("add", this.addOne, this);
    this.collection.on("reset", this.addAll, this);
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
})


describe("Application", function() {
	it("creates a global variable for the name space", function () {
		should.exist(todoApp);
	})
})

describe("Todo Model", function(){
	describe("Initialization", function() {
		beforeEach(function() {
			this.todo = new todoApp.Todo();
		})
		it("should default the status to 'pending'",function() {
			this.todo.get('complete').should.be.false;
		})
		it("should default the title to an empty string",function() {
			this.todo.get('title').should.equal("");
		})
	})
	describe("Attributes", function() {
		beforeEach(function() {
			this.todo = new todoApp.Todo();
			this.save_stub = sinon.stub(this.todo, "save");
		})
		afterEach(function() {
			this.save_stub.restore();
		})
		it("should support setting the title", function() {
			this.todo.set('title',"Test");
			this.todo.get('title').should.equal("Test");
		})
		it("should support setting the status", function() {
			this.todo.set('complete',true);
			this.todo.get('complete').should.be.true;
		})
		it("should toggle status from 'pending' to 'complete'", function() {
			this.todo.toggleStatus();
			this.todo.get('complete').should.be.true;
		})
	})
	describe("Persistence", function() {
		beforeEach(function() {
			this.todo = new todoApp.Todo();
			this.save_stub = sinon.stub(this.todo, "save");
		})
		afterEach(function() {
			this.save_stub.restore();
		})
		it("should update server when title is changed", function() {
			this.todo.set("title", "New Todo");
			this.save_stub.should.have.been.calledOnce;
		})
		it("should update server when status is changed", function() {
			this.todo.set('complete',true);
			this.save_stub.should.have.been.calledOnce;
		})
	})
});

describe("Todo List Item View", function() {
	beforeEach(function(){
		this.todo = new todoApp.Todo({title: "Todo"});
	  this.item = new todoApp.TodoListItem({model: this.todo});
		this.save_stub = sinon.stub(this.todo, "save");
	})
	afterEach(function() {
		this.save_stub.restore();
	})
	it("render() should return the view object", function() {
		this.item.render().should.equal(this.item);
	});
	it("should render as a list item", function() {
	  this.item.render().el.nodeName.should.equal("LI");
	})
	describe("Template", function() {
		beforeEach(function(){
			this.item.render();
		})	
		it("should contain the todo title as text", function() {
			this.item.$el.text().should.have.string("Todo");
		})
		it("should include a label for the status", function() {
			this.item.$el.find("label").should.have.length(1);
		})
		it("should include an <input> checkbox", function() {
			this.item.$el.find("label>input[type='checkbox']").should.have.length(1);
		})
		it("should be clear by default (for 'pending' todos)", function() {
			this.item.$el.find("label>input[type='checkbox']").is(":checked").should.be.false;
		})
		it("should be set for 'complete' todos", function() {
			this.todo.set("complete", true);
			this.item.render();
			this.item.$el.find("label>input[type='checkbox']").is(":checked").should.be.true;
		})
	})
	describe("Model Interaction", function() {
		it("should update model when checkbox clicked", function() {
      $("<div>").attr("id","fixture").css("display","none").appendTo("body");
			this.item.render();
			$("#fixture").append(this.item.$el);
			this.item.$el.find("input").click();
			this.todo.get('complete').should.be.true;
			$("#fixture").remove();
		})
	})
})

describe("Todos Collection", function() {
	it("should support explicit initialization with multiple todos", function() {
		this.todos = new todoApp.Todos([
			{title: "Todo 1"},
			{title: "Todo 2"}
		]);
		this.todos.length.should.equal(2);
	})
})

describe("Todos List View", function() {
	beforeEach(function(){
		this.todos = new todoApp.Todos([
			{title: "Todo 1"},
			{title: "Todo 2"}
		]);
		this.list = new todoApp.TodosList({collection: this.todos});
	})
	it("render() should return the view object", function() {
		this.list.render().should.equal(this.list);
	});
	it("should render as an unordered list", function() {
		this.list.render().el.nodeName.should.equal("UL");
	})
	it("should include list items for all models in collection", function() {
		this.list.render();
		this.list.$el.find("li").should.have.length(2);
	})
})

/*
 * For extra credit, the following code can be used to 
 * test interaction with a REST API. It's not really
 * appropriate for unit tests of the todos module
 * because it's actually testing the backbone library.
 *
 * You might need to mock a REST API if your server doesn't
 * provide the standard backbone responses (e.g. using
 * ._id instead of .id) and the model has to adjust for
 * that.
 */

describe("Collection's Interaction with REST API", function() {
	it("should load using the API", function() {
		this.ajax_stub = sinon.stub($, "ajax").yieldsTo("success", [
			{ id: 1, title: "Mock Todo 1", complete: false },
		  { id: 2, title: "Mock Todo 2", complete: true  }
		]);
		this.todos = new todoApp.Todos();
		this.todos.fetch();
		this.todos.should.have.length(2);
		this.todos.at(0).get('title').should.equal("Mock Todo 1");
		this.todos.at(1).get('title').should.equal("Mock Todo 2");
		this.ajax_stub.restore();
	})
})
