/**
 * Created by Peter on 06/01/15.
 */
(function(){
    angular
        .module('app.searchEngine')
        .factory('highliter', highliter);

    function highliter(){

        return service;

        function service(searchQuery){
            var myHilitor;
            myHilitor = new Hilitor("results"); // results is ID in html
            myHilitor.apply(searchQuery);
        }

    }

}());