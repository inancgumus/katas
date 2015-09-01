module.exports = function () {
  return {
    files: [
      {pattern: 'lib/require.js', instrument: false},
      {pattern: 'lib/*.js', instrument: false, load: false},
      {pattern: 'test/test-main.js', instrument: false},
      {pattern: 'src/**/*.js', load: false}
    ],

    tests: [
      {pattern: 'test/**/*.js', load: false}
    ]
  };
};
