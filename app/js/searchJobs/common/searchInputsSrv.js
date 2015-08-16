/**
 * Created by Peter on 03/01/15.
 */
(function(){
    angular
        .module('app.searchJobs')
        .factory('searchInputs', searchInputs);

    searchInputs.$inject= ['languageOptions', '_', '$location', 'searchJobs'];

    function searchInputs(languageOptions, _, $location,  searchJobs){

        var service = {
            clearInputs: clearInputs,
            initData: initData,
            initLanguageOptions: initLanguageOptions,
            onSearchButton: onSearchButton,
            search: search
        };

        return service;

        function getSelectedLanguageOption(vm) {
            var x = _.findIndex(vm.languageOptions, {
                'language':  searchJobs.model.searchInputs.first ? searchJobs.model.searchInputs.first : ""
            });

            return vm.languageOptions[x];
        }

        function clearInputs(vm){
            vm.searchInputs.first = "";
            vm.searchInputs.second = "";
            vm.searchInputs.third = "";
            vm.selectedLanguage= {};
        }

        function initData(vm) {
            initLanguageOptions(vm);
            vm.searchInputs = searchJobs.model.searchInputs;
            vm.selectedLanguage = getSelectedLanguageOption(vm);
            console.log(vm);
        }

        function initLanguageOptions(vm){
            vm.languageOptions = languageOptions;
        }

        function search() {
            //searchValues.setSearchValues({
            //    searchFirst: vm.searchInputs.searchFirst.language,
            //    searchSecond: vm.searchInputs.searchSecond,
            //    searchThird: vm.searchInputs.searchThird
            //});
        }

        function onSearchButton(vm) {
            $location.path('/search/' + (vm.selectedLanguage.language ? vm.selectedLanguage.language : "" )+ '/' +
                                        (vm.searchInputs.second ? vm.searchInputs.second  : "") + '/' +
                                        (vm.searchInputs.third ? vm.searchInputs.third  : ""))
        }
    }

}());