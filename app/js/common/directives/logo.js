/**
 * Created by Peter on 02/01/15.
 */
(function(){

    angular
        .module('app')
        .directive('logo', logo);

    function logo(){

        var directive = {
            scope: {
                'size': '@',
                'class': '@'
            },
            template: '<img class="{{class}}" data-ng-src="img/aurity_logo_v32_{{size}}.png">',
            restrict: 'E',
            replace: true
        };
        return directive;
    }

}());