var NonAMD = function () {
  var counted = 0;
  
  this.name = "i am a non amd not-module";
  
  this.increase = function() {
    counted++;
    return this;
  };

  this.counted = function() {
    return counted;
  };
};
