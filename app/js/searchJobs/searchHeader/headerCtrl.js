/**
 * Created by Peter on 02/01/15.
 */
(function(){
    angular
        .module('app.searchJobs')
        .controller('headerCtrl', headerCtrl);

    headerCtrl.$inject= ['searchInputs'];

    function headerCtrl(searchInputs){
        var vm = this;
        vm.languageOptions = [];
        vm.selectedLanguage = {}
        vm.searchInputs = {};

        vm.search = searchInputs.search;
        vm.onSearchButton = searchInputs.onSearchButton;

        activate();

        function activate() {
            searchInputs.initData(vm);
            searchInputs.search(vm);
        }



    }




}());