angular.module('library', [])
    .service('datum', function(){
        var datum = {
            year: 0,
            month: 0,
            day: 0
        };
        return datum;
    })
    // .service('guardianResultsDisplay', function(){
    //     var guardianResults = new Array();
    //     return guardianResults;
    // })
    .service('guardianArticleFullDisplay', ['$http', function($http){
        return function(query, month, day, year){
            return $http({
                method: 'GET',
                url: 'http://content.guardianapis.com/search?api-key=31765bca-1313-4ce3-923e-3fb24f7f1e74&show-tags=all&from-date='+year+'-'+month+'-'+day+'',
                params: {
                    q: query, 
                    type: 'article'
                }
            });    
        };
    }])
    .service('nyTimesArticleFullDisplay', ['$http', function($http){
        return function(query, month, day, year){
            day = ("0"+day).slice(-2);
            month = ("0"+month).slice(-2);
            return $http({
                method: 'GET',
                url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b300f1262de04d1aa5540a01c03f2494',
                params: {
                    q: query,
                    begin_date: ''+year+''+month+''+day+''
                }
            });
        };    
    }])
    .factory('dateParams', ['datum', function(datum){
        return function(day){
            datum.year = day.year;
            datum.month = day.month;
            datum.day = day.day;
        };
    }])
    // .factory('results', ['guardianResultsDisplay', function(guardianResultsDisplay){
    //     return function(result){
    //         guardianResultsDisplay = result;
    //     };
    // }]);
    // .factory('callNews', ['guardianArticleFullDisplay', 'nyTimesArticleFullDisplay', '$q',
    // function(guardianArticleFullDisplay, nyTimesArticleFullDisplay, $q){
    //     return function(query, month, day, year){
    //         var guardian = $q.defer();
    //         var nytimes = $q.defer();
    //         var guardianResponse = guardianArticleFullDisplay(query, month, day, year);
    //         var nyTimesResponse = nyTimesArticleFullDisplay(query, month, day, year);
    //         var responded = new Array();
    //         guardianResponse.then(function(response){
    //             var guardianArticles = response;
    //             guardian.resolve(guardianArticles);
    //         }),
    //         function(response){
    //             guardian.reject(response);
    //         };
    //         nyTimesResponse.then(function(response){
    //             var nyTimesArticles = response;
    //             nytimes.resolve(nyTimesArticles);
    //         }),
    //         function(response){
    //             nytimes.reject(response);
    //         };
    //         var all = $q.all([guardian.promise, nytimes.promise]);
    //         var guardianNews;
    //         var nytimesNews;
    //         all.then(function(data){
    //             responded.push(data[0]);
    //             responded.push(data[1]);
    //         });
    //         return responded;
    //     };
    // }]);