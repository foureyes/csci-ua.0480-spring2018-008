
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: grunt.option('port') || 4000,
          base: '_site'
        },
      }
    },

    touch: {
      options: {
        match: true,
      },
      target: ['index-data.markdown'],
    },

    jekyll: {
      options: {
        serve: false,
        incremental: true,
        trace: true,
        verbose: true
      },

      build: {
      },

      buildData: {
        options: {
          layouts: './_csv_tmp',
          config: './_config.yml',
          src: './_csv_tmp',
          dest: './_data'
        }
      }
    },

    less: {
      dev: {
        options: {
          compress: true,
        },
        files: {
          "./resources/css/pdf.css":"./resources/less/pdf.less",
          "./_site/resources/css/pdf.css":"./resources/css/pdf.css",
          "./resources/css/styles.css":"./resources/less/base.less",
          "./_site/resources/css/styles.css":"./resources/less/base.less",
          "./resources/css/slides.css":"./resources/less/slides.less",
          "./_site/resources/css/slides.css":"./resources/less/slides.less"
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },

      site: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
        ],
        dest: './resources/js/site.js',
      },

      addYaml: {
        options: {
          separator: '',
          src: [
            './_includes/yamlHeader.yml',
            './_csv_src/schedule.csv',
          ],
          dest: './_csv_tmp/schedule.csv',
        }
      }
    },

    copy: {
      slides: {
        nonull: true,
        expand: true,
        cwd: 'bower_components/',
        src: 'reveal.js/**',
        dest: 'resources/lib/'
      },
    },

    watch: {
      less: {
        files: ['resources/less/*.less'],
        tasks: 'less'
      },


      jekyllData: {
        files: [ 
          '_csv_src/**',
        ],
        tasks: ['jekyll:buildData', 'jekyll:build'],
      },

      jekyll: {
        files: [ 
          '*.html',
          '*.yml',
          '*.markdown',
          'slides/*/*.markdown',
          'code/*.*',
          'homework/*.*',
          'slides/*/*.html',
          'resources/js/**.js',
          '_posts/**',
          '_includes/**',
          '_layouts/**',
          '!**/node_modules/**',
          '!**/_site/**',
          '!_site',
          '!_site/**',
          '!**/bower_components/**',
          '!bower.json',
          '!gruntfile.js',
          '!package.json',
          '!README.md'
        ],
        options: {
          livereload: false,
        },
        tasks: ['jekyll:build'],
      }
    },
  });

  grunt.registerTask('build', ['touch', 'concat:addYaml', 'jekyll:buildData', 'jekyll:build']);
  grunt.registerTask('watch', ['watch:less', 'watch:jekyllData', 'watch:jekyll']);
  grunt.registerTask('dev', ['concat', 'copy', 'build', 'connect', 'watch']);

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-touch');
  grunt.loadNpmTasks('grunt-liquid');
};
