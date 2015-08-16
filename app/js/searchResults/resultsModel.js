/**
 * Created by Peter on 04/01/15.
 */
(function(){
    angular
        .module('app.searchResults')
        .factory('resultsModel', resultsModel);

    function resultsModel(){

        var model = {};

        var service = {
            model: model
        };

        return service;

    }
}());
