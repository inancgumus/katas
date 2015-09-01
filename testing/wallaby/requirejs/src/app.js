define(function define() {

    var App = function App(el) {
        this.el = el;
    };

    App.prototype.change = function change(text) {
        this.el.html(text);
    };

    App.prototype.erase = function erase() {
        this.el.empty();
    };

    App.prototype.hi = function erase() {
        this.el.html('say hi!');
    };

    App.prototype.render = function render() {
        this.el.html('require.js up and running');
    };

    return App;

});
