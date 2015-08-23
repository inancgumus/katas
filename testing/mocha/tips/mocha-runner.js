/*jshint -W020 */
/*jshint -W117 */


// Save this to mocha-runner.js and run node mocha-runner.js


// globals
jsdom = require('jsdom').jsdom;
document = jsdom('<html><head><script></script></head><body></body></html>');
window = document.createWindow();
jQuery = $ = require("jquery").create(window);
navigator = window.navigator = {};
DEBUG = false;
navigator.userAgent = 'NodeJs JsDom';
navigator.appVersion = '';

sinon = require('sinon');
chai = require('chai');
chai.use(require('chai-spies'));
chai.use(require("sinon-chai"));
assert = chai.assert;
expect = chai.expect;
should = chai.should();

angular = window.angular = {};
module = window.module = {};

//
var glob = require('glob').sync,
    _ = require('lodash');


//
// mocha
var Mocha = require('mocha');

var mocha = new Mocha();

mocha.reporter('spec').ui('bdd');


// gather test files 
var filePatterns = _([
    'test/runner-test.js',
    'test/lib/angular/angular.js',
    'test/lib/angular/angular-*.js',
    'public/js/app.js',
    'public/js/controllers/*.js',
    'public/js/filters/*.js',
    'public/js/services/*.js',
    'test/unit/ctrls/*Spec.js',
    'test/unit/filters/*Spec.js',
    'test/unit/services/*Spec.js'
]);

var testFiles = filePatterns.map(function(pattern){
    return glob(pattern);
}).flatten();


testFiles.forEach(function(file){
    mocha.addFile(file);
});

var runner = mocha.run();
