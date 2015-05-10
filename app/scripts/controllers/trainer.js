'use strict';

/**
 * @ngdoc function
 * @name gulfstreamApp.controller:TrainerCtrl
 * @description
 * # TrainerCtrl
 * Controller of the gulfstreamApp
 */
angular.module('gulfstreamApp')
    .controller('TrainerCtrl', function ($scope, trainer) {

        $scope.trainer = trainer;
        $scope.trainer_form = $scope.trainer.trainer_form;
        console.log($scope.trainer);

        var start = new Date();
        start.setMonth(start.getMonth() - 3);
        console.log(start);

        $scope.config = {
            start: new Date(2015, 2),
            data: $scope.trainer_form
        }

        $scope.runners = _($scope.trainer.runners).chain()
            .pluck('RRtg')
            .filter(function(num) {
                return num >= 0;
            })
            .value();
    });
