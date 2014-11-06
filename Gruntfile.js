module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			web: {
				files: ['lib/**/*.js'],
				tasks: ['default']
			}
		},
		browserify: {
			js: {
				src: 'lib/opensecrets.js',
				dest: 'dist/opensecrets.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['browserify']);
	grunt.registerTask('build', ['browserify']);
};