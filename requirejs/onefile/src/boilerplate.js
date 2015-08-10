/*
For convenience sake I generally keep a "boilerplate.js" in my application root so I can copy it when I need to.

The first argument of the define function is our dependency array, in the future we can pass in any modules we like.
*/

define([
  // These are path alias that we configured in our bootstrap
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope
  return {};
  // What we return here will be used by other modules
});
