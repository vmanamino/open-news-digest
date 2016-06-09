angular.module('ONDApp')
    .controller('NYTimesModalCtrl', ['$scope', 'nytimesArticleMetadata', '$uibModalInstance',
    'sendEmail',
    function($scope, nytimesArticleMetadata, $uibModalInstance, sendEmail){
        $scope.email_option = false;
        $scope.title = nytimesArticleMetadata.headline;
        $scope.snippet = nytimesArticleMetadata.snippet;
        $scope.contributors = nytimesArticleMetadata.byline;
        $scope.attribution = nytimesArticleMetadata.attribution;
        $scope.keywords = new Array();
        $scope.keywords = nytimesArticleMetadata.keywords;
        $scope.link = nytimesArticleMetadata.link;
        $scope.type = nytimesArticleMetadata.type;
        
        $scope.email = function(article){
            console.log(article);
            $scope.email_option = true;
        };
        
        $scope.send_email = function(email_address){
            $scope.email_option = false;
            var subject = $scope.title;
            var title = $scope.snippet;
            sendEmail(title, $scope.link, $scope.type, email_address, subject, $scope.attribution);
            $uibModalInstance.close();
            
        };
        
    }]);