var through = require('through2');

var buffer = '';

function transform(chunk, encoding, next) {
  buffer += chunk;
  next();
}

function flush(next) {
  this.push('var $ = require(\'jquery\');');
  this.push('\n\n');
  this.push(buffer);
  next();
}

function processFile(file) {
  var ext = file.split('.').pop();
  buffer = '';

  if (ext === 'coffee') {
    return through(transform, flush);
  } else {
    return through();
  }
}

module.exports = processFile;
