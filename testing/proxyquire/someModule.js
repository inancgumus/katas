var dependent = require('./dependentModule');

module.exports = {
  giveInfo: function() {
    return dependent.hey()
      + " --- "
      + dependent.field;
  }
}
