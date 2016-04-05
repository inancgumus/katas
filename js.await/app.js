let request = require('request');
 
function getQuote() {
  console.log('geting quote...');
  return new Promise((resolve, _) => {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', 
      (_, _2, body) => { resolve(body); }
    );
  });
}
 
async function main() {
  let queries = [ getQuote(), getQuote() ]; 
  try {
    let quotes  = await Promise.all(queries);
    return quotes.forEach((quote) => {
      console.log(quote);
    });
  } catch (err) {
    console.log(`error:${err}`);
  }
}
 
main();
console.log('Ron once said,');
