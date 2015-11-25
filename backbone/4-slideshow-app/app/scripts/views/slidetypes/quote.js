define(['backbone'], function(Backbone) {

	var QuoteSlide = Backbone.View.extend({

    render: function() {
      return this.$el
				.addClass('quote')
				.append([,
					'<figure>',
						'<blockquote>',
							this.model.get('quote'),
						'</blockquote>',
						'<figcaption>',
							'<cite>',
								this.model.get('cite'),
							'</cite>',
						'</figcaption>',
					'</figure>'
				].join(''));
    }

  });

  return QuoteSlide;

});
