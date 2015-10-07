module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		//insert js files into Jade
		wiredep: {
			target: {
				src: 'client/views/layout.jade' // point to your JADE file.
			}
		},

		meta: {
            basePath: 'client/',
            srcPath: 'client/bower_components/bootstrap-sass/assets/stylesheets/'
        },

		sass: {
			dist: {
				files: {
					'<%= meta.basePath %>styles/styles.css': '<%= meta.basePath %>scss/styles.scss'
				}
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'client/styles',
					src: ['*.css', '!*.min.css'],
					dest: 'client/styles',
					ext: '.min.css'
				}]
			}
		},
		injector: {
			options: {
				starttag: '// injector:{{ext}}',
				endtag: '// endinjector',
				transform: function (filepath) {
					// hot fix !!!! revrited originsl function
					var currentPath = filepath.slice(8);

					return "script(src='" + currentPath + "')";
				}
			},
			local_dependencies: {
				files: {
					'client/views/layout.jade': ['client/baseApp/modules/**/*.js', 'client/baseApp/common/**/*.js'],
				}
			}
		},

		express: {
			options: {
				// Override defaults here
			},
			dev: {
				options: {
					script: 'server/app.js'
				}
			}
		},

		watch: {
			css: {
				files: ['<%= meta.srcPath %>bootstrap/*.scss', '<%= meta.srcPath %>bootstrap/mixins/*.scss', '<%= meta.basePath %>scss/*.scss'],
				tasks: ['sass', 'cssmin']
			},

			express: {
				files: ['server/*.js'],
				tasks: ['express:dev'],
				options: {
					spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
				}
			}

		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-injector');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('serve', ['express:dev', 'watch']);
	grunt.registerTask('compile', ['wiredep', 'injector']);
}