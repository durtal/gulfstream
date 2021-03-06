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
        $scope.races = _.sortBy(races, 'race');

        $scope.raceId = _.pluck($scope.races, 'race');
        // console.log(races);
        // $scope.predicate = 'race';
        //
        // var rnrs = _.pluck(races, 'runners');
        // console.log(rnrs);
        //
        // var wnrs = _.flatten(rnrs);
        // console.log(wnrs);
        //
        // $scope.pos1 = _.where(wnrs, {
        //     'pos': 1
        // });
        // console.log($scope.pos1);

        $scope.winners = _($scope.races).chain()
            .pluck('runners')
            .flatten()
            .where({ 'pos': 1 })
            .value();

        $scope.ratings = _(races).chain()
            .pluck('runners')
            .flatten()
            .pluck('RRtg')
            .filter(function(num) {
                return num >= 0;
            })
            .value();

    });
