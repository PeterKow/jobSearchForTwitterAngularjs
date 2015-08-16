/**
 * Created by Peter on 04/01/15.
 */
(function(){
    angular
        .module('app.searchEngine')
        .factory('searchEngine', searchEngine);

    searchEngine.$inject = ['twitter', 'resultsModel', 'highliter', 'twitterQuery', 'proritizeResults'];

    function searchEngine(twitter, resultsModel, highliter, twitterQuery, proritizeResults) {

        var service = {
            search: search
        };

        return service;

        function search() {
            twitter.searchTweets().then(function (data) {
                // update results
                resultsModel.model.data = data;
                // prioritize data
                proritizeResults.apply(resultsModel);

                // temporary highlight here, move later
                setTimeout(
                    function() {
                        // temporary query search
                        highliter(twitterQuery.getQueryJobs());
                    }, 100);
            });
        }
    }

}());