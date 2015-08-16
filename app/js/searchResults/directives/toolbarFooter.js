/**
 * Created by Peter on 05/01/15.
 */
(function(){
    angular
        .module('app.searchResults')
        .directive('toolbarFooter', toolbarFooter);

    function toolbarFooter(){

        var directive = {
            templateUrl: 'searchResults/templates/toolbarFooter.html',
            restrict: 'A',
            replace: true
        };

        return directive;
    }
}());