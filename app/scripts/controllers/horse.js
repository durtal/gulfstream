'use strict';

/**
 * @ngdoc function
 * @name gulfstreamApp.controller:HorseCtrl
 * @description
 * # HorseCtrl
 * Controller of the gulfstreamApp
 */
angular.module('gulfstreamApp')
    .controller('HorseCtrl', function($scope, RcappeRHorses, _, $stateParams) {

        RcappeRHorses.getRatings(function(data) {
            $scope.all = data;

            $scope.horse = _.findWhere($scope.all, {
                '_id' : $stateParams.horse_id
            });

            console.log($stateParams.horse_id);

            $scope.races = $scope.horse.races;

/*
            // working underscorejs example
            var races = _.toArray($scope.races);

            // extract ratings from all races
            var ratings = _.pluck(_.pluck(races, 'runners'), 'RRtg');
            console.log(ratings);

            // find max rating
            var max = _.max(ratings);
            console.log(max);

            $scope.wins = _.filter(_.pluck(_.pluck(races, 'runners'), 'pos'), function(a) {
                return a === 1;
            }).length;


*/
        });
    });
