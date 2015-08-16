/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {
    // grunt-angular-templates assumes your module is named "app", but
    // you can override it like so:
    //
    // ngtemplates: {
    //   options: {
    //     module: "myModuleName"
    //   }
    // }

    copy: {
      templates: {
        expand: true,
        cwd: 'app/js/',
        src: '**/*.html',
        dest: 'generated/'
      }
      //css: {
      //  expand: true,
      //  cwd: 'app/',
      //  //src: 'css/vendors/**/*.css',
      //  src: 'css/vendors/**/*.css',
      //  dest: 'generated/'
      //}
    },
    watch: {
      view: {
        files: ["app/js/**/*.html"],
        tasks: ["copy:templates"]
      },
      css: {
        files: ["app/js/**/*.css"],
        tasks: ["concat_sourcemap:css"]
      }
    },


    jshint: {
      options: {
        // "no-use-before-define": false,
        // "nofunc": false,
        latedef: "nofunc"
      },
      files: {
        // wrong file path to not check
      }

    },
    concat_sourcemap: {
      css: {
        src: ['app/js/**/*.css', 'app/css/**/*.css']
      },
      options: {
        // Task-specific options go here.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      }
    },
    webfonts: {
        files: {
          "bower_components/font-awesome/fonts/": "bower_components/font-awesome/fonts/**/*.*"
          //"vendor/components/font-awesome/fonts/": "vendor/components/font-awesome/fonts/**/*.*"
        },
        root: "fonts"
    },

    removeTasks: {
      // dev: ['watch'],
      common: ['less', 'coffee', 'handlebars', 'jst', 'webfonts:dev', 'concat_sourcemap', 'jshint'],
      dist: ['webfonts:dist', 'uglify', 'cssmin', 'ngAnnotate']
    },
    appendTasks: {
      common: ['copy', 'webfonts'], // 'jshint', 'jslint'
      dev: ['watch']
      //dist: ['webfonts']
    },

    server: {
      pushState: false
      // API Proxying
      //
      // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
      // port as your lineman development server. By enabling the API proxy and setting the port, all
      // requests for paths that don't match a static asset in ./generated will be forwarded to
      // whatever service might be running on the specified port.
      //
      // apiProxy: {
      //   enabled: true,
      //   host: 'localhost',
      //   port: 3000
      // }
    }

    // Sass
    //
    // Lineman supports Sass via grunt-contrib-sass, which requires you first
    // have Ruby installed as well as the `sass` gem. To enable it, comment out the
    // following line:
    //
    // enableSass: true

    // Asset Fingerprints
    //
    // Lineman can fingerprint your static assets by appending a hash to the filename
    // and logging a manifest of logical-to-hashed filenames in dist/assets.json
    // via grunt-asset-fingerprint
    //
    // enableAssetFingerprint: true

  };
};
