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

        var start = new Date();
        start.setMonth(start.getMonth() - 5);

        $scope.config = {
            start: start,
            data: $scope.trainer_form,
            itemName: "% horses beaten",
            cellSize: 18,
            domainGutter: 5,
            subDomainTextFormat: "%d",
            label: {
        		position: "right",
        		width: 46,
        		rotate: "left"
        	}
        }

        $scope.runners = _($scope.trainer.runners).chain()
            .pluck('RRtg')
            .filter(function(num) {
                return num >= 0;
            })
            .value();
    });
