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
    }]);