'use strict';

/**
 * @ngdoc function
 * @name gulfstreamApp.controller:RatingsCtrl
 * @description
 * # RatingsCtrl
 * Controller of the gulfstreamApp
 */
angular.module('gulfstreamApp')
    .controller('RatingsCtrl', function ($scope, RcappeRHorses) {

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        RcappeRHorses.getHKJC(function(data) {
            $scope.horses = data;
        });

        $scope.predicate = '-details.hk_rtg';

    });
