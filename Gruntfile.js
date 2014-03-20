module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
        html: {
            src: 'jade/*.jade',
            dest: 'html/test.html',
            options: {
                client: false,
                pretty: true,
                data: grunt.file.readYAML('content/test.yaml')
            }
        }
    },
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task(s).
  grunt.registerTask('default', ['jade', 'stylus']);

};