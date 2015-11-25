define(['backbone', 'models/slide'], function(Backbone, SlideModel) {
	var Slides = Backbone.Collection.extend({
		model: SlideModel
	});

	return Slides;
});