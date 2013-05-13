module.exports = function(grunt)
{
	grunt.loadNpmTasks('svgo-grunt');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-smushit');

	grunt.registerTask('build',
	[
		'compass:prod',
		'copy:prod',
		'uglify:prod',
		'svgo:prod',
		'smushit:prod'
	]);

	grunt.initConfig({

		pkg: '<json:package.json>',
		watch: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['compass:prod'],
				options: {
				  interrupt: true
				}
			},
		},
		compass: {
			prod: {
				options: {
					sassDir: 'scss',
					imagesDir: 'images',
					fontsDir: 'fonts',
					cssDir: 'css',
					noLineComments: true,
					outputStyle: 'compressed'
				}
			}
		},
		uglify: {
			options: {
				preserveComments: 'none'
			},
			prod: {
				files: [
					{
						expand: true,
						src: ['js/**/*.js'],
						dest: 'build/',
						ext: '.js'
					}
				]
			}
		},
		svgo: {
			prod: {
				files: 'build/images/**/*.svg'
			}
		},
		smushit: {
			prod: {
				files: [
					{
						src: ['images'],
						dest: 'build/images'
					}
				]
			}
		},
		copy: {
			prod: {
				files: [
					{ expand: true, src: ['fonts/**/*'], dest: 'build/' },
					{ expand: true, src: ['images/**/*'], dest: 'build/' },
					{ expand: true, src: ['js/**/*'], dest: 'build/' },
					{ expand: true, src: ['css/**/*'], dest: 'build/' },
					{ expand: true, src: ['*.html'], dest: 'build/' },
					{ expand: true, src: ['*.php'], dest: 'build/' }
				]
			}
		}
	});
};
