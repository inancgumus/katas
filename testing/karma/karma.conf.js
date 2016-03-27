module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-coverage'
    ],
    preprocessors: {
      '**/src/**/*.js': ['coverage']
    },
    browsers: ['PhantomJS'/*, 'Chrome'*/],
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
      subdir: '.',       // prevent putting covs into browser directories
      includeAllSources: true
    },

    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    colors: true,
    port: 9876,
    concurrency: Infinity
  })
}
