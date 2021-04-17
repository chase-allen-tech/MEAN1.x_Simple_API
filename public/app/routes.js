angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider, $locationProvider){
    // $locationProvider.hashPrefix('!');
    
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    })
    .when('/photo', {
        templateUrl: 'app/views/pages/photo.html',
        controller: 'photoCtrl',
        controllerAs: 'photo'
    })
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

});