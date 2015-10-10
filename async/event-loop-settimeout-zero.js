console.log('started');

setTimeout(function() {
  console.log('inside setTimeout!');
  setTimeout(function() {
    console.log('nested inside setTimeout. will run in 2nd turn');
  }, 0);
}, 0);

setTimeout(function() {
  console.log('inside setTimeout again!');
}, 0);

console.log('settimeout has been set');


console.log('time to run event loop\s turn');
