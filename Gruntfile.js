module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          paths: ['app/assets/stylesheets/css/', 'app/assets/dist/stylesheets/stylus/'],
          compress: false,
          use: [
            require('jeet')
            ]
        },
        files: {
          'app/assets/stylesheets/css/main.min.css': ['app/assets/dist/stylesheets/stylus/main.styl']
        }
      }
    },
    watch: {
      css: {
        files: [ '*.html', 'app/assets/dist/stylesheets/stylus/partials/*.styl' ],
        tasks: [ 'stylus' ],
        options: {
          livereload: true
        }
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // register tasks
  grunt.registerTask('default', ['watch', 'stylus']);
};