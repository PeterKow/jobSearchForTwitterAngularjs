/**
 * Created by Peter on 02/01/15.
 */
(function(){
    angular
        .module('app.searchJobs')
        .factory('searchJobs', searchJobs);

    function searchJobs(){

        var model = {};
            model.searchInputs = {};

        var service = {
            model: model,
            setModelFromUrl: setModelFromUrl
        };

        return service;

        function setModelFromUrl(data){
            model.searchInputs.first  = data.first;
            model.searchInputs.second = data.second;
            model.searchInputs.third  = data.third;
        }

        function setData(){

        }
    }

}());