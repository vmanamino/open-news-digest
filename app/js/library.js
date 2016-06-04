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
            snippet: '',
            link: '',
            type: ''
        };
        return article;
    })
    // .service('guardianArticleMetadata', function(){
    //     var article = {
    //         contributors: [],
    //         headline: '',
    //         keywords: [],
    //         section: '',
    //         link: '',
    //         type: ''
    //     }
        
    // })
    // .service('guardianKeywords', function(){
    //     var guardianKeywords = new Array();
    // })
    // .service('guardianContributors', function(){
    //     var guardianContributors = new Array();
    // })
    .service('nytimesKeywords', function(){
        var keys = new Array();
        return function(keywords){
            for (var i =  0; i < keywords.length; i++){
                keys.push(keywords[i].value);
            }  
            return keys;    
        };
    })
    // .service('guardianTags', ['guardianKeywords', 'guardianContributors', 
    // function(guardianKeywords, guardianContributors){
    //     // var keys = new Array();
    //     return function(tags){
    //         for (var i = 0; i < tags.length; i++){
    //             if (tags[i].type == "keyword"){
    //                 guardianKeywords.push(tags[i].webTitle); 
    //             }
    //             if (tags[i].type == "contributor"){
    //                 guardianContributors.push(tags[i].webTitle);
    //             }
    //         }
            
    //     };
    // }])
    .service('guardianContributors', function(){
        var contrs = new Array();
        return function(contributors){
            for (var i = 0; i < contributors.length; i++){
                if (contributors[i].type == "contributor"){
                    contrs.push(contributors[i].webTitle);
                }
            }
            return contrs;
        };
    })
    .service('guardianArticlesFullDisplay', ['$http', function($http){
        return function(query, month, day, year){
            return $http({
                method: 'GET',
                url: 'http://content.guardianapis.com/search?api-key=31765bca-1313-4ce3-923e-3fb24f7f1e74&show-tags=all&from-date='+year+'-'+month+'-'+day+'',
                params: {
                    q: query
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
        return function(result){
            nytimesArticleMetadata.byline = result.byline.original;
            nytimesArticleMetadata.headline = result.headline.main;
            nytimesArticleMetadata.keywords = nytimesKeywords(result.keywords);
            nytimesArticleMetadata.newsDesk = result.news_desk;
            nytimesArticleMetadata.section = result.section_name;
            nytimesArticleMetadata.subsection = result.subsection_name;
            nytimesArticleMetadata.snippet = result.snippet;
            nytimesArticleMetadata.link = result.web_url;
            nytimesArticleMetadata.type = result.document_type;
        };    
    }])
    // .factory('guardianArticleDetails', ['guardianArticleMetadata', 'guardianTags', 'guardianKeywords', 'guardianContributors',
    // function(guardianArticleMetadata, guardianTags, guardianKeywords, guardianContributors){
    //     return function(result){
    //         guardianTags(result);
    //         guardianArticleMetadata.contributors = guardianContributors;
    //         guardianArticleMetadata.headline = result.webTitle;
    //         guardianArticleMetadata.keywords = guardianKeywords;
    //         guardianArticleMetadata.section = result.sectionName;
    //         guardianArticleMetadata.link = result.webUrl;
    //         guardianArticleMetadata.type = result.type;
    //     }; 
    // }]);
    