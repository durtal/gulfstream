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

        RcappeRHorses.getHorses(function(data) {
            $scope.all = data;

            $scope.horse = _.findWhere($scope.all, {
                '_id' : $stateParams.horse_id
            });

            console.log($stateParams.horse_id);

            $scope.races = $scope.horse.races;
        });
    });
