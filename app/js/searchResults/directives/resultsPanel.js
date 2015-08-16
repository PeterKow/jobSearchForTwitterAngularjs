/**
 * Created by Peter on 04/01/15.
 */
(function(){
    angular
        .module('app.searchResults')
        .directive('resultsPanel', resultsPanel);

    function resultsPanel(){
        var directive = {
            templateUrl: 'searchResults/templates/resultsPanel.html',
            restrict: 'E',
            replace: true
        }

        return directive;
    }

}());