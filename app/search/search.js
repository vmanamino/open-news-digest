angular.module('ONDApp')
    .controller('SearchCtrl', ['$scope', '$location', 'datum', 
    function($scope, $location, datum){
        $scope.day = datum.day;
        var monthNum = datum.month;
        $scope.month = monthNum + 1;
        $scope.year = datum.year;
        $scope.news = function(){
            console.log($scope.query);
        };
    }]);