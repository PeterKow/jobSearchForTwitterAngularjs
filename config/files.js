/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    //js: {
    //  vendor: [
    //    "vendor/js/angular.js",
    //    "vendor/js/**/*.js"
    //  ],
    //  app: [
    //    "app/js/app.js",
    //    "app/js/**/*.js"
    //  ]
    //}
    js: {
      vendor: [
        "bower_components/angular/angular.min.js",
        "bower_components/jquery/dist/jquery.min.js",
        // "bower_components/lodash/dist/lodash.underscore.min.js",
        "bower_components/lodash/dist/lodash.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        //"bower_components/angular-resource/angular-resource.min.js",
        //"bower_components/satellizer/satellizer.min.js",
        "bower_components/angular-route/angular-route.min.js",
        "bower_components/angular-loading-bar/build/loading-bar.min.js",
        "bower_components/hilitor/hilitor.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js",
        // "vendor/js/**/*.js"
      ]
    }

  };
};
