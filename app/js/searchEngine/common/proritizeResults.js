/**
 * Created by Peter on 06/01/15.
 */
/**
 * app Module
 *
 * Description
 */

(function() {
    'use strict';

    angular
        .module('app')
        .factory('proritizeResults', proritizeResults);


    proritizeResults.$inject = ['$log', '_', 'searchJobs'];

    function proritizeResults($log, _, searchJobs) {


        var service = {
            apply: apply
        };

        return service;

        function apply(results) {
            if(results.model.data){
                var searchArray = [];
                // create RegExp for each search input
                var searchFirst = new RegExp(searchJobs.model.searchInputs.first.toLowerCase(), "gi");
                var searchSecond = new RegExp(searchJobs.model.searchInputs.second.toLowerCase(), "gi");

                //collect RegExp in an array
                searchArray.push(searchFirst);
                searchArray.push(searchSecond);

                _.forEach(searchJobs.model.searchInputs.third.toLowerCase().split(" "), function(value) {
                    if (value != 'or') {
                        var searchThird = new RegExp(value, "gi");
                        searchArray.push(searchThird);
                    }
                });


                //go through the results and add priority
                _.forEach(results.model.data.statuses, function(tweet) {
                    // create priority element
                    if (!tweet.priority) {
                        tweet.priority = 0;
                    }

                    //count keywords in the results
                    _.forEach(searchArray, function (regExp) {
                        if (tweet.text.match(regExp)) {
                            tweet.priority++;
                        }
                    });
                });
            }

            return results;
        }




    }

}());