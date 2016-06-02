angular.module('library', [])
    .service('datum', function(){
        var datum = {
            year: 0,
            month: 0,
            day: 0
        };
        return datum;
    })
    .factory('dateParams', ['datum', function(datum){
        return function(day){
            datum.year = day.year;
            datum.month = day.month;
            datum.day = day.day;
        };
    }])
    .factory('callNews', ['guardianArticleFullDisplay', function(guardianArticleFullDisplay){
        return function(query){
            var guardian = guardianArticleFullDisplay(query);
            var responded = [];
            responded.push(guardian);
            return responded;
        };
    }])
    .factory('guardianArticleFullDisplay', ['$http', function($http){
        return function(query){
            return $http({
                method: 'GET',
                url: 'http://content.guardianapis.com/search?api-key=31765bca-1313-4ce3-923e-3fb24f7f1e74&show-tags=all',
                params: {
                    q: query, 
                    type: 'article'
                }
            });    
        };
    }]);