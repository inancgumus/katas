/*
Our applications main module should always remain light weight. This tutorial only covers setting up a Backbone Router and initializing it in our main module.

The router will then load the correct dependencies depending on the current URL.
*/

define([
  // 'jquery',
  'nonamdx'
], function(nonamd){
  var initialize = function(){
    console.log('initialized');

    console.log(new NonAMD().increase().increase().counted());
  }

  return {
    initialize: initialize
  };
});
