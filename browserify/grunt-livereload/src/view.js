var $ = require('jquery');
var _model;

function init(model) {
  _model = model;

  bindToButton('buttonAdd', _model.add);
  bindToButton('buttonSubtract', _model.subtract);

  _model.onChange(render);
}

function render() {
  $('#result').text(_model.result());
}

function onButtonClicked(mathOperation) {
  var elements = getElementVals();
  mathOperation(elements.a, elements.b);
}

// ============ internals ============

function bindToButton(buttonId, mathOperation) {
  $('#'+ buttonId).on('click', function(e) {
    e.preventDefault();
    onButtonClicked(mathOperation);
  });
}

function getElementVals() {
  return {
    a: parseInt($('#elementA').val()),
    b: parseInt($('#elementB').val())
  }
}

module.exports = {
  init: init,
  triggerClick: function() {
    $('#buttonAdd').trigger('click');
  }
};
