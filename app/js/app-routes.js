// angular.module('ONDApp')
ond
    .config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when("/", {
            templateUrl: 'app/home/templates/home.html',
            controller: 'HomeCtrl'
        })
        .when("/search/:day", {
            templateUrl: 'app/search/templates/search.html',
            controller: 'SearchCtrl'
        });
    }]);