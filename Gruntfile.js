module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            main: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: "web/dist/css/bootstrap-theme.css.map",
                    sourceMapURL: '/web/dist/css/bootstrap-theme.css.map'
                },
                // Preprocess css styles
                files: {
                    "web/dist/css/bootstrap-theme.css": "src/less/bootstrap.less"
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            // Concat third party libs
            lib: {
                src: ['src/js/**/*.js'],
                dest: 'web/dist/js/lib.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            // Uglify Angular app files
            app: {
                files: {
                    'web/dist/js/app.min.js': ['src/app/**/*.js']
                }
            }
        },

        copy: {
            // Copie images
            img: {
                expand: true,
                cwd: 'src/img/',
                src: '**',
                dest: 'web/dist/img/'
            },
            // Copie des fonts
            font: {
                expand: true,
                cwd: 'src/font/',
                src: '**',
                dest: 'web/dist/font/'
            },
            icon: {
                expand: true,
                cwd: 'src/icon/',
                src: '**',
                dest: 'web/dist/icon/'
            },
            app: {
                expand: true,
                cwd: 'src/app/',
                src: ['**/*.html', '**/*.json'],
                dest: 'web/dist/app/'
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '.',
                    keepalive: true
                }
            }
        },

        // Empties dist directory
        clean: ["web/dist"],

        watch: {
            less_main: {
                files: ['src/less/**/*.less'],
                tasks: ['less:main']
            },
            concat_lib: {
                files: ['src/js/**/*.js'],
                tasks: ['concat:lib']
            },
            ugligy_app: {
                files: ['src/app/**/*.js'],
                tasks: ['uglify:app']
            },
            copy_img: {
                files: ['src/img/**'],
                tasks: ['copy:img']
            },
            copy_font: {
                files: ['src/font/**'],
                tasks: ['copy:font']
            },
            copy_icon: {
                files: ['src/icon/**'],
                tasks: ['copy:icon']
            },
            copy_app: {
                files: ['src/app/**/*.html', 'src/app/**/*.json'],
                tasks: ['copy:app']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task(s).
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'less', 'copy']);

    //grunt.registerTask('server', ['connect:server']);
};
