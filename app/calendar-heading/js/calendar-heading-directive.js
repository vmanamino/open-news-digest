// angular.module('ONDApp')
ond
    .directive('calendarHeading', function(){
        return {
            restrict: 'E',
            // template: "<h1>Search</h1>"
            templateUrl: 'app/calendar-heading/templates/calendar-heading-partial.html',
            scope: true,
            controller: function($scope, $element, $location){
                $scope.toCalendar = function(){
                    $location.path("/");
                };
            }
        };
    })