angular.module('ONDApp')
    .config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when("/", {
            templateUrl: 'app/home/home.html'
        });
    }]);