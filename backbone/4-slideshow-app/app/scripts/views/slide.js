define(['backbone', 'helpers', 'views/slidetypes'],
function(Backbone, Helpers, SlideTypes) {

	var Slide = Backbone.View.extend({
		className	: 'slide',
		slides		: SlideTypes,

		render: function() {
			if ( this.model.get('title') ) {
				this.renderHeading();
			}

			var slideView = this.slides[this.model.get('type')];
			if (slideView) {
				this.$el.append(new slideView({ model: this.model }).render());
			}

			return this;
		},

		renderHeading: function() {
			return this.$el.append(
				'<h1 class=' + this.model.get('size') + '>' + this.model.get('title') + '</h1>'
			);
		}
	});

	return Slide;
});
