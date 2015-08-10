/* 
Our bootstrap file will be responsible for configuring Require.js and loading initially important dependencies.

We also request a module called "app", this will contain the entirety of our application logic

Note: Modules are loaded relatively to the boot strap and always append with ".js". So the module "app" will load "app.js" which is in the same directory as the bootstrap.
*/

require.config({
  paths: {
    // jquery: '../bower_components/jquery/dist/jquery',
    nonamdx: 'nonamd'
  },
  /* prevent caching */
  urlArgs: "bust=" + (new Date()).getTime()
});

require([
  // Load our app module and pass it to our definition function
  'app',
  'anotherModule'
], function(App) {
  App.initialize();
});
