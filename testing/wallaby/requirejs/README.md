Testing require.js code with wallaby.js
==================================

![screen shot 2015-04-13 at 2 45 02 pm](https://cloud.githubusercontent.com/assets/979966/7109935/b9fd680e-e1eb-11e4-96f1-1d8482efa6e5.png)

To get Wallaby.js to run with require.js we need two files:

* `wallaby.js` &mdash; which configures wallaby.js
* `test-main.js` &mdash; which configures require.js for the tests

Let's say our app has a directory structure which looks something like this:

```bash
$ tree
.
|-- index.html
|-- wallaby.js
|-- lib
|   |-- jquery.js
|   |-- require.js
|   `-- underscore.js
|-- src
|   |-- app.js
|   `-- main.js
`-- test
    |-- appSpec.js
    `-- test-main.js

3 directories, 9 files
```

## Configure wallaby.js

The first step is creating our `wallaby.js`.

```javascript
module.exports = function () {
  return {
    files: [
      {pattern: 'lib/require.js', instrument: false},
      {pattern: 'lib/*.js', instrument: false, load: false},
      {pattern: 'src/app.js', load: false},
      {pattern: 'test/test-main.js', instrument: false}
    ],

    tests: [
      {pattern: 'test/appSpec.js', load: false}
    ]
  };
};
```

Please notice that we need set `load: false` to all the files and tests except `test/test-main.js`, everything else is loaded by require.js.

In this example we'll use Jasmine (wallaby.js is using it by default), but other test frameworks works just
as well.

## Configuring require.js

Just like any require.js project, you need a main module to bootstrap
your tests. We do this is `test/test-main.js`.

### Require Each Test File

With wallaby.js we don't need to list all test files ourselves as we can
easily find them from the files specified in `test-main.js`: wallaby
includes all the files in `window.wallaby.tests`.

Now we can tell Require.js to load our tests, which must be done
asynchronously as dependencies must be fetched before the tests are run.
The `test/test-main.js` file ends up looking like this:

```javascript
// delaying wallaby automatic start
wallaby.delayStart();

requirejs.config({
  baseUrl: '/src',

  paths: {
    'jquery': '../lib/jquery',
    'underscore': '../lib/underscore'
  },

  shim: {
    'underscore': {
      exports: '_'
    }
  },

  // asking require.js to load our tests
  deps: wallaby.tests,

  // starting run once require.js is done
  callback: wallaby.start
});
```

## Using Require.js in tests

Tests can now be written as regular Require.js modules. We wrap
everything in `define`, and inside we can use the regular test methods,
such as `describe` and `it`. Example:

```javascript
define(['app', 'jquery', 'underscore'], function(App, $, _) {

    describe('just checking', function() {

        it('works for app', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            expect(el.text()).toEqual('require.js up and running');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

    });

});
```
---

Based on [Karma with require.js repository](https://github.com/kjbekkelund/karma-requirejs), with some wallaby specific changes.
