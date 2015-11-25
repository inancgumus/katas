define(['backbone'], function(Backbone) {

	var ImageSlide = Backbone.View.extend({

    render: function() {
      return this.$el
      	.addClass('image')
      	.append('<img src="' + this.model.get('image') + '">');
    }

  });

  return ImageSlide;
});
