a = require('./a')

console.log(a.hey("inanc"))

# here, jquery will be auto-required by our customer browserify transformer
console.log("jquery version is: "+ $.fn.jquery)

