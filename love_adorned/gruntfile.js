module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var PathConfig = require('./grunt-settings.js');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        config: PathConfig,

        // Sprites
        sprite: {
            all: {
                src: 'images/icons/*',
                dest: 'images/sprite.png',
                destCss: 'sass/helpers/_sprite.scss',
                imgPath: '../images/sprite.png',
                padding: 2
            }
        },

        // Styles
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'assets/main.min.css': 'sass/main.scss'
                }
            }
        },

        // Scripts
        uglify: {
            my_target: {
                options: {
                    sourceMap: true
                },
                files: {
                    'assets/main.min.js': [
                        'js/jquery.min.js',
                        'js/libs/**/*.js',
                        'js/functions.js'
                    ]
                }
            }
        },

        // Watch
        watch: {
            sprite: {
                files: ['images/**/*'],
                tasks: ['sprite']
            },
            sass: {
                files: ['sass/**/*'],
                tasks: ['sass']
            },
            uglify: {
                files: ['js/**/*'],
                tasks: ['uglify']
            }
        },

        'sftp-deploy': {
          build: {
            auth: {
              host: '<%= config.sftpServer %>',
              port: '<%= config.sftpPort %>',
              authKey: {
                        "username": "<%= config.sftpLogin %>",
                        "password": "<%= config.sftpPas %>"
                      }
            },
            cache: 'sftpCache.json',
            src: 'css',
            dest: '<%= config.sftpDestination %>',
            //exclusions: ['/path/to/source/folder/**/.DS_Store', '/path/to/source/folder/**/Thumbs.db', 'dist/tmp'],
            serverSep: '/',
            concurrency: 4,
            progress: true
          }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // upload to server
    grunt.registerTask('sftp', ['sftp-deploy']);

    // Default task
    grunt.registerTask('default', 'build');
    grunt.registerTask('build', ['sprite', 'sass', 'uglify']);

};
