module.exports = (grunt) ->

  grunt.initConfig
    
    browserify:
      
      options:
        watch: true
        keepAlive: true
        
        browserifyOptions:
          debug: true
          transform: ['coffeeify']
          extensions: ['.coffee']

      build:
        src: ['src/init.coffee'],
        dest: 'dist/bundle.js',

      nowatch:
        src: ['src/init.coffee'],
        dest: 'dist/bundle.js',
        options:
          watch: false
          keepAlive: false        

      deploy:
        src: ['src/init.coffee'],
        dest: 'dist/bundle.js',
        options:
          debug: false
          watch: false
          keepAlive: false

    uglify:
      deploy:
        files:
          'dist/bundle.min.js': ['dist/bundle.js']
        options:
          reserveDOMProperties: true
          mangleProperties: false
          mangle: true
          compress:
            sequences: true
            dead_code: true
            conditionals: true
            booleans: true
            unused: true
            if_return: true
            join_vars: true
            hoist_funs: true
            hoist_vars: true
            # drop_console: true

    coffeelint:
      options:
        force: true
        configFile: 'coffeelint.json'
      app: ['src/**/*.coffee']

    clean:
      build:
        src: ['dist']
        force: true
      deploy:
        src: ["dist/*.js", "!dist/*.min.js"]


  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-coffeeify')

  grunt.loadNpmTasks('grunt-coffeelint')
  grunt.loadNpmTasks('grunt-contrib-uglify')


  grunt.registerTask 'default', [
    'clean', 'coffeelint', 'browserify'
  ]

  grunt.registerTask 'build', [
    'clean', 'coffeelint', 'browserify:nowatch'
  ]

  grunt.registerTask 'deploy', [
    'clean', 'coffeelint', 'browserify:deploy', 'uglify', 'clean:deploy'
  ]
  
  grunt.registerTask 'check', ['coffeelint']
  grunt.registerTask 'trash', ['clean']
