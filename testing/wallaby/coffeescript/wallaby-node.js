module.exports = function (w) {

  return {
    files: [
      'src/*Node.coffee'
    ],

    tests: [
      'test/*NodeSpec.coffee'
    ],

    env: {
      type: 'node'
    }

    // CoffeeScript compiler is on by default with default options,
    // you can configure built-in compiler by passing options to it
    //compilers: {
    //  '**/*.coffee': w.compilers.coffeeScript({})
    //}

    // By default CoffeeScript compiler renames .coffee files to .js files.
    // If you'd like to not do it and for example use your own renaming strategy,
    // you may pass 'noRename' option to CS compiler
    //  '**/*.coffee': w.compilers.coffeeScript({ noRename: true })
    // and may use preprocessors to rename files the way you like:
    //preprocessors: {
    //  '**/*.coffee': file => file.rename(file.path + '.js').content
    //}
  };
};