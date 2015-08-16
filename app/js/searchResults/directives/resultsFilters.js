/**
 * Created by Peter on 04/01/15.
 */
(function() {
    angular
        .module('app.searchEngine')
        .directive('resultsFilters', resultsFilters);

    function resultsFilters() {

        var directive = {
            scope: {
                filterFirst: '='
            },
            template: '<input id="filterFirst" class="form-control" ' +
                'data-ng-model="filterFirst" type="text"  ' +
                'placeholder="Additional search criteria" >',
            restrict: 'A',
            replace: true

        };

        return directive;
    }

}());