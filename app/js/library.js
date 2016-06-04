angular.module('library', [])
    .service('datum', function(){
        var datum = {
            year: 0,
            month: 0,
            day: 0
        };
        return datum;
    })
    .service('nytimesArticleMetadata', function(){
        var article = {
            byline: '',
            headline: '', // print headline
            keywords: [],
            newsDesk: '',
            section: '',
            subsection: '',
            snippet: ''
        };
        return article;
    })
    .service('nytimesKeywords', function(){
        var keys = new Array();
        return function(keywords){
            for (var i =  0; i < keywords.length; i++){
                keys.push(keywords[i].value);
            }  
            return keys;    
        };
    })
    .service('guardianArticlesFullDisplay', ['$http', function($http){
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
    .service('nyTimesArticlesFullDisplay', ['$http', function($http){
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
    .factory('nytimesArticleDetails', ['nytimesArticleMetadata', 'nytimesKeywords',
    function(nytimesArticleMetadata, nytimesKeywords){
        return function(article){
            nytimesArticleMetadata.byline = article.byline.original;
            nytimesArticleMetadata.headline = article.headline.print_headline;
            nytimesArticleMetadata.keywords = nytimesKeywords(article.keywords);
            nytimesArticleMetadata.newsDesk = article.news_desk;
            nytimesArticleMetadata.section = article.section_name;
            nytimesArticleMetadata.subsection = article.subsection_name;
            nytimesArticleMetadata.snippet = article.snippet;
        };    
    }]);
    