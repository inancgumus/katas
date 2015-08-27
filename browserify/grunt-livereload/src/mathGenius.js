var _result = NaN;
var _callback;

// ============ logic ============

function add(a, b) {
  _result = a + b;
  changed();
}

function subtract(a, b) {
  _result = a - b;
  changed();
}

// ============ internals ============

function changed() {
  if (typeof _callback !== undefined) {
    _callback(_result);
  }
}

function onChange(callback) {
  _callback = callback;
}

function getResult() {
  return _result;
}

// ============ api ============

module.exports = {
  add: add,
  subtract: subtract,
  result: getResult,
  onChange: onChange
};
