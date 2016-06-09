angular.module('ONDApp')
    .controller('GuardianModalCtrl', ['$scope', 'guardianArticleMetadata', '$uibModalInstance',
    'sendEmail',
    function($scope, guardianArticleMetadata, $uibModalInstance, sendEmail){
        $scope.send_email = true;
        $scope.email_option = false;
        $scope.attribution = guardianArticleMetadata.attribution;
        $scope.title = guardianArticleMetadata.headline;
        $scope.link = guardianArticleMetadata.link;
        $scope.type = guardianArticleMetadata.type;
        $scope.keywords = guardianArticleMetadata.keywords;
        $scope.contributors = guardianArticleMetadata.contributors;
        console.log('guardian metadata');
        console.log(guardianArticleMetadata);
        console.log($scope.attribution);
        
        $scope.email = function(article){
            console.log(article);
            $scope.email_option = true;
        };
        
        $scope.send_email = function(email_address){
            console.log(email_address);
            $scope.email_option = false;
            var subject = "Guardian article: " + $scope.keywords[0].title;
            sendEmail($scope.title, $scope.link, $scope.type, email_address, subject, $scope.attribution);
            $uibModalInstance.close();
        };
    }]);