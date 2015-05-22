 var movieApp = angular.module("MovieApp", ['ngRoute']);

movieApp.config(function($routeProvider) {
        $routeProvider.
          when('/start', {
            templateUrl: 'start.html',
            controller: 'StartCtrl'
          }).
          otherwise({
            redirectTo: '/start'
          });
      });