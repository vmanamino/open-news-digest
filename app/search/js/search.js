angular.module('ONDApp')
    .controller('SearchCtrl', ['$scope', '$location', 'datum', 
    'guardianArticlesFullDisplay', 'nyTimesArticlesFullDisplay', 'guardianArticleDetails',
    'nytimesArticleDetails', 'nytimesArticleMetadata', '$q', '$uibModal', 
    function($scope, $location, datum, guardianArticlesFullDisplay, nyTimesArticlesFullDisplay,
    guardianArticleDetails, nytimesArticleDetails, nytimesArticleMetadata, $q, $uibModal)
    {
        $scope.day = datum.day;
        var monthNum = datum.month;
        $scope.month = monthNum + 1;
        $scope.year = datum.year;
        $scope.term;
        $scope.results;
        $scope.guardianResults;
        $scope.nytimesResults;
        $scope.news = function(){
            var guardian = $q.defer();
            var nytimes = $q.defer();
            $scope.term = $scope.query;
            var guardianResponse = guardianArticlesFullDisplay($scope.query, $scope.month, $scope.day, $scope.year);
            var nyTimesResponse = nyTimesArticlesFullDisplay($scope.query, $scope.month, $scope.day, $scope.year);
            guardianResponse.then(function(response){
                var guardianArticles = response;
                guardian.resolve(guardianArticles);
            }),
            function(response){
                guardian.reject(response);
            };
            nyTimesResponse.then(function(response){
                var nyTimesArticles = response;
                nytimes.resolve(nyTimesArticles);
            }),
            function(response){
                nytimes.reject(response);
            };
            var all = $q.all([guardian.promise, nytimes.promise]);
            var guardianNews;
            var nytimesNews;
            all.then(function(data){
                guardianDisplay(data[0]);
                console.log(data[1]);
                nytimesDisplay(data[1]);
            });
           
        };
        
        guardianDisplay = function(results){
            $scope.results = results.data.response.results.length;
            $scope.guardianResults = results.data.response.results;
            console.log('guardian results');
            console.log($scope.guardianResults);
            
        };
        
        nytimesDisplay = function(results){
            $scope.results += results.data.response.docs.length;
            $scope.nytimesResults = results.data.response.docs;
            console.log($scope.nytimesResults);
        };
        
        $scope.guardianArticle = function(result){
            guardianArticleDetails(result);
            $uibModal.open({
                templateUrl: './app/article-display/templates/guardian-article-display-template.html',
                controller: 'GuardianModalCtrl'
            });
        };
        
        $scope.nytimesArticle = function(result){
            nytimesArticleDetails(result); 
            $uibModal.open({
                templateUrl: './app/article-display/templates/nytimes-article-display-template.html',
                controller: 'NYTimesModalCtrl'
            });
        };
    }]);