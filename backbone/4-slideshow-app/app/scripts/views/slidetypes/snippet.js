define(['backbone'], function(Backbone) {

	var SnippetSlide = Backbone.View.extend({

    render: function() {
      var self = this;
			var snippet = this.model.get('snippet');

			this.$el.addClass('snippet');

			if ( $.isPlainObject(snippet) ) {
				return _.each(snippet, function(snippetPath, heading) {
					self.setSnippet(snippetPath, heading);
				});
			}

			self.setSnippet(snippet);

      return this.$el;
    },

		setSnippet: function(snippetPath, heading) {
			var self = this;

			$.get(snippetPath, function(snippet) {
				self.$el
					.append('<pre class="prettyprint">' + _.escape(snippet) + '</pre>');

				prettyPrint();
			});
		}

  });

  return SnippetSlide;

});
