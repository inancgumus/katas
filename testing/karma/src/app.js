var app = function(opts) {
  var defaults = {
    text: 'hello world'
  }
  var opts = opts || defaults

  return {
    greet: function() {
      return opts.text;
    }
  }
}
