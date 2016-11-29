var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/cats', {
      templateUrl: 'views/templates/cats.html',
      controller: 'CatsController',
      controllerAs: 'cats'
    })
    .when('/dogs', {
      templateUrl: 'views/templates/dogs.html',
      controller: 'DogsController',
      controllerAs: 'dogs'
    })
    .when('/fish', {
      templateUrl: 'views/templates/fish.html',
      controller: 'FishController',
      controllerAs: 'fish'
    })
    .otherwise({
      redirectTo: '/dogs'
    });

}]);
