define(['backbone'], function(Backbone) {
  var Main = Backbone.Router.extend({
    routes: {
      '': 'home',
      'slides/:id': 'showSlide'
    },

    home: function() {
      App.Vent.trigger('init');
    },

    showSlide: function(slideIndex) {
      App.Vent.trigger('changeSlide', {
        slideIndex: slideIndex,
        direction: 'next'
      });
    }
  });

  return Main;
});