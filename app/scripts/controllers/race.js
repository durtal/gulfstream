'use strict';

/**
 * @ngdoc function
 * @name gulfstreamApp.controller:RaceCtrl
 * @description
 * # RaceCtrl
 * Controller of the gulfstreamApp
 */
angular.module('gulfstreamApp')
    .controller('RaceCtrl', function ($scope, $stateParams, _) {

        $scope.race = _.findWhere($scope.races, {
            'date_race': $stateParams.raceDate + '_' + $stateParams.raceId
        });

    });
