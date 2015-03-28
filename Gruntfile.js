module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
        html: {
            src: 'jade/*.jade',
            dest: 'output/index.html',
            options: {
                client: false,
                pretty: true,
                data: grunt.file.readYAML('content/data.yaml')
            }
        }
    },
    stylus: {
      compile: {
          options: {
              paths: ['stylus/include'/*, 'another/to/import'*/], // Specifies directories to scan for @import directives when parsing.
              /*use: [
                  require('fluidity') // use stylus plugin at compile time
              ],
              import: [      //  @import 'foo', 'bar/moo', etc. into every .styl file
                  'foo',       //  that is compiled. These might be findable based on values you gave
                  'bar/moo'    //  to `paths`, or a plugin you added under `use`
              ]*/
          },
          files: {
              'output/style.css': 'stylus/*.styl', // 1:1 compile
          },
          'include css': true
      }
    },
    watch: {
      scripts: {
        //TODO: also watch to Yaml datasets
        files: ['jade/**/*.jade', 'stylus/**/*.styl'],
        tasks: [ 'jade', 'stylus' ],
        options: {
          spawn: false
          //,livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade', 'stylus', 'watch']);
  grunt.registerTask('co', ['jade', 'stylus']);

};