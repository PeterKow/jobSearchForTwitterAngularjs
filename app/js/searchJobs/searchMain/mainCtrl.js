/**
 * Created by Peter on 02/01/15.
 */
(function(){
    angular
        .module('app.searchJobs')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject= ['searchInputs'];

    function mainCtrl(searchInputs){
        var vm = this;
        vm.languageOptions = [];
        vm.selectedLanguage = {}
        vm.searchInputs = {};

        vm.onSearchButton = searchInputs.onSearchButton;

        activate();

        function activate() {
            searchInputs.initLanguageOptions(vm);
        }

    }

}());