angular.module('ONDApp')
    .controller('NYTimesModalCtrl', ['$scope', 'nytimesArticleMetadata', 
    function($scope, nytimesArticleMetadata){
        $scope.title = nytimesArticleMetadata.headline;
        $scope.snippet = nytimesArticleMetadata.snippet;
        $scope.attribution = nytimesArticleMetadata.byline;
        $scope.keywords = new Array();
        $scope.keywords = nytimesArticleMetadata.keywords;
        $scope.link = nytimesArticleMetadata.link;
        $scope.type = nytimesArticleMetadata.type;
        
    }]);