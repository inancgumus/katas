module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      app: {
        src: 'src/app.js',
        dest: 'dist/app.js',
        options: {
          browserifyOptions: {
            // enable sourcemaps
            debug: true
          }
        }
      }
    },

    watch: {
      app: {
        files: [
            'index.html',
            'src/**/*.js'
        ],
        tasks: ['browserify'],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      app: {
        options: {
          port: 9001,
          base: '.',
          middleware: function (connect, options, middlewares) {
            middlewares.unshift(require('connect-livereload')());
            return middlewares;
          }
        }
      }
    }
  });

  // load additional modules / plugins
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // define tasks
  grunt.registerTask('default', ['browserify']);
  grunt.registerTask('serve', ['browserify:app', 'connect:app', 'watch:app']);
};
