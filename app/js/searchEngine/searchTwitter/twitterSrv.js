/**
 * Created by Peter on 02/01/15.
 */
(function(){
    angular
        .module('app.searchTwitter')
        .factory('twitter', twitter);

    twitter.$inject = ['$http', 'twitterQuery'];

    function twitter($http, twitterQuery){

        var service = {
            searchTweets: searchTweets
        };

        return service;

        function searchTweets(){
            return getDataTwitter(twitterQuery.getQueryJobs());
        }

        ///////////////////////////////////////////////////////////////////
        //  Real titter
        ///////////////////////////////////////////////////////////////////

        function checkResponse(data) {
            console.log("Success Twitter");
            console.log(data.data);
            return data.data.message;
        }

        function serverErrorConnection(data) {
            console.log("Errror Twitter");
        }

        function post(url, params) {
            return $http.post(url, params)
                .then(checkResponse, serverErrorConnection);
        }

        function getDataTwitter(query) {
            console.log("get twitter");
            var url = "/search/twitter";
            // roles opportunity
            query = "job OR hire OR hiring OR looking OR apply " + query;
            var params = {
                q: query,
                // geocode: "51.507322,-0.127647,150mi",
                lang: "en",
                count: 100,
                // result_type: "recent",
                // max_id: 545078766989369340,
                // since_id: 5450872409
                //result_type = default "mixed"
                // * mixed: Include both popular and real time results in the response.
                //   * recent: return only the most recent results in the response
                //   * popular: return only the most popular results in the response.

            };
            return post(url, params);
        }
    }
}());