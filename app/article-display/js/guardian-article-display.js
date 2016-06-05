angular.module('ONDApp')
    .controller('GuardianModalCtrl', ['$scope', 'guardianArticleMetadata',
    function($scope, guardianArticleMetadata){
        $scope.title = guardianArticleMetadata.headline;
        $scope.link = guardianArticleMetadata.link;
        $scope.type = guardianArticleMetadata.type;
        $scope.keywords = guardianArticleMetadata.keywords;
        $scope.attribution = guardianArticleMetadata.contributors;
        console.log('guardian metadata');
        console.log(guardianArticleMetadata);
        console.log($scope.attribution);
    }]);