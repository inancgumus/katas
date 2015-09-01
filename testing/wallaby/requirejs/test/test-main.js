// delaying wallaby automatic start
wallaby.delayStart();

requirejs.config({
  baseUrl: '/src',

  paths: {
    'jquery': '../lib/jquery',
    'underscore': '../lib/underscore'
  },

  shim: {
    'underscore': {
      exports: '_'
    }
  },

  // asking require.js to load our tests
  deps: wallaby.tests,

  // starting run once require.js is done
  callback: wallaby.start
});