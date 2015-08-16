(function(){
  angular
      .module("app")
      .config(function($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl: 'searchJobs/searchMain/main.html',
      controller: 'mainCtrl',
      controllerAs: 'main'
    });

        $routeProvider.when('/keywords', {
          templateUrl: 'searchJobs/searchMain/Keywords/mainKeywords.html',
          controller: 'mainCtrl',
          controllerAs: 'main'
        });


    $routeProvider.when('/search/:first?/:second?/:third?', {
      templateUrl: 'searchJobs/searchHeader/header.html',
      //controller: 'headerCtrl',
      //controllerAs: 'search',
      resolve: {
        setSearchJobs: function($route, searchJobs) {
          searchJobs.setModelFromUrl($route.current.params);

        }
      }
    });

    $routeProvider.otherwise({ redirectTo: '/' });

  });

}());
