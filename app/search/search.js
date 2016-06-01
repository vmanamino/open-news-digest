angular.module('ONDApp')
    .controller('SearchCtrl', ['$scope', '$location', 'datum', 
    function($scope, $location, datum){
        $scope.day = datum.day;
        $scope.month = datum.month;
        $scope.year = datum.year;
        $scope.news = function(){
            console.log($scope.query);
        };
    }]);