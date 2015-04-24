'use strict';

/**
    * @ngdoc function
    * @name gulfstreamApp.controller:DateCtrl
    * @description
    * # DateCtrl
    * Controller of the gulfstreamApp
*/

angular.module('gulfstreamApp')
    .controller('DateCtrl', function ($scope, races, $stateParams, _) {

        $scope.date = $stateParams.raceDate;
        $scope.races = races;
        console.log(races);

        var rnrs = _.pluck(races, 'runners');
        console.log(rnrs);

        var wnrs = _.flatten(rnrs);
        console.log(wnrs);

        $scope.pos1 = _.where(wnrs, {
            'pos': 1
        });
        console.log($scope.pos1);
    });
