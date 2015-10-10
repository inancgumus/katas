var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr       = new XMLHttpRequest()
  , isAsync   = true
  , timestamp;

xhr.open('get', 'http://www.google.com', isAsync);
xhr.send();
// .send() will only be called after js event loop' turn
// which means that, below event handlers will be registered
// before it runs

console.log('this loop will delay the event loop\'s turn');
timestamp = Date.now() + 3000;
while (Date.now() < timestamp);

// this will always be called
// whether it is attached before xhr.send or not
function listener() {
  console.log('hello from listener...');
}

xhr.addEventListener('load' , listener);
xhr.addEventListener('error', listener);
// these event will be registered

console.log('NOW THE EVENT LOOP\'S NEXT TURN CAN HAPPEN');
