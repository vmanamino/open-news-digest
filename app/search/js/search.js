angular.module('ONDApp')
    .controller('SearchCtrl', ['$scope', '$location', 'datum', 'guardianArticleFullDisplay',
    'callNews',
    function($scope, $location, datum, guardianArticleFullDisplay, callNews){
        $scope.day = datum.day;
        var monthNum = datum.month;
        $scope.month = monthNum + 1;
        $scope.year = datum.year;
        $scope.news = function(){
            console.log(callNews($scope.query));
            
        };
        // $scope.news = function(){
        //     guardianArticleFullDisplay($scope.query).then(function(response){
        //         console.log(response);
        //     }),
        //     function(response){
        //         alert('error');
        //     }
            
        // };
    }]);