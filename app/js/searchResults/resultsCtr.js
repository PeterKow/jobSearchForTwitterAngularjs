/**
 * Created by Peter on 04/01/15.
 */
(function(){

    angular
        .module('app.searchEngine')
        .controller('resultsCtr', resultsCtr);

   resultsCtr.$inject = ['resultsModel', 'searchEngine','highliter','twitterQuery'];

    function resultsCtr(resultsModel, searchEngine, highliter, twitterQuery){

        /*jshint validthis: true */
        var vm = this;
        vm.filterFirst = "";
        //results Panel
        vm.isCollapsed = true;
        //template for List to load
        vm.templateName = 'resultsList';
        //Model
        vm.model = resultsModel.model;

        //temporary highlighting function in controller
        vm.highlight =  function(){
            console.log('highlight');
            highliter(twitterQuery.getQueryJobs());
        };


        activate();

        function activate(){
            //searchEngine.search();
        }
    }

}());


