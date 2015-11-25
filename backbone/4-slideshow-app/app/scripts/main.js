require.config({
  shim: {
    'backbone': {
      deps: ['../components/underscore/underscore', 'jquery'],
      exports: 'Backbone'
    }
  },

  paths: {
    jquery: 'vendor/jquery.min',
    backbone: '../components/backbone/backbone',
    prettify: '../components/google-code-prettify/src/prettify'
  }
});

require(['views/app', 'prettify'], function(AppView) {
  window.App = {
    Vent: _.extend({}, Backbone.Events)
  };

  new AppView();
});