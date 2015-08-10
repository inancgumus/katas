define(function() {
  var counter = 0;
  return {
    name: 'my name is another module',
    increase: function() { counter++; },
    status: function() { return counter; }
  };
});
