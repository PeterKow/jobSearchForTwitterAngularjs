/**
 * Created by Peter on 04/01/15.
 */
(function(){
    angular
        .module('app.searchResults')
        .directive('resultsList', resultsList)

    function resultsList(){
        var directive = {
            templateUrl : "/searchResults/templates/resultsList.html",
            replace: true,
            restrict: 'E'

        };

        return directive;
    }
}());