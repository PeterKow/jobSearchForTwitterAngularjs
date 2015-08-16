/**
 * Created by Peter on 02/01/15.
 */
(function(){
    angular
        .module('underscore', [])
        .factory('_', function() {
        "use strict";
        return window._; // assumes underscore has already been loaded on the page
    });

}());
