(function(){

    angular
        .module('app.searchTwitter')
        .factory('twitterQuery', twitterQuery);

    twitterQuery.$inject = ['searchJobs', '_'];

    function twitterQuery(searchJobs, _) {

        var service = {
            createQuery: createQuery,
            getQueryJobs: getQueryJobs
        }

        return service;

        function createQuery(array) {
            var query = "";
            if (array) {
                _.forEach(array , function(element) {
                    query += element + " ";
                });
            }
            return query;
        }

        function getQueryJobs(){
            return createQuery(searchJobs.model.searchInputs);
        }


    }

}());