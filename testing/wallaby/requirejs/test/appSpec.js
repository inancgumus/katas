define(['app', 'jquery', 'underscore'], function(App, $, _) {

    describe('just checking', function() {
        var el, app;

        beforeEach(function() {
          el = $('<div></div>');

          app = new App(el);

          app.render();
        });

        it('works for app', function() {
          expect(el.text()).toEqual('require.js up and running');
        });

        it('changes text', function() {
          app.change('another thing');
          expect(el.text())
            .toEqual('another thing');
        });

        it('erases the text', function() {
          app.erase();
          expect(el.text()).toEqual('');
        });

        it('says hi', function() {
          app.hi();
          expect(el.text()).toEqual('say hi!');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

    });

});
