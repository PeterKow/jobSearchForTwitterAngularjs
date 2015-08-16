(function(){
    angular
        .module('app.searchJobs')
        .value('languageOptions',
             [{
                    language: "ABAP"
                }, {
                    language: "C"
                }, {
                    language: "C++"
                }, {
                    language: "C#"
                }, {
                    language: "Java"
                }, {
                    language: "JavaScript"
                }, {
                    language: "Objective-C"
                }, {
                    language: "PHP"
                }, {
                    language: "Python"
                }, {
                    language: "Swift"
                }, {
                    language: "SQL"
                }, {
                    language: "Ruby"
                }]
    );

}());