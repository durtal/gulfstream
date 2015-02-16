'use strict';

/**
 * @ngdoc function
 * @name gulfstreamApp.controller:ZipfHcpvisCtrl
 * @description
 * # ZipfHcpvisCtrl
 * Controller of the gulfstreamApp
 */
angular.module('gulfstreamApp')
  .controller('ZipfHcpvisCtrl', function ($scope) {

      $scope.ExampleRaces = [
        {
            'year': 2009,
            'p1' : 100,
            'p2' : 98,
            'p3' : 95,
            'p4' : 90,
            'p5' : 76
        },
        {
            'year': 2010,
            'p1' : 95,
            'p2' : 94,
            'p3' : 93,
            'p4' : 88,
            'p5' : 87
        },
        {
            'year': 2011,
            'p1' : 102,
            'p2' : 90,
            'p3' : 80,
            'p4' : 75,
            'p5' : 73
        }
      ];

      $scope.weightedRatings = [
        {
            'year' : 2009,
            'p1' : 100,
            'p2' : 103,
            'p3' : 105,
            'p4' : 105,
            'p5' : 96
        },
        {
            'year' : 2010,
            'p1' : 95,
            'p2' : 99,
            'p3' : 103,
            'p4' : 103,
            'p5' : 107
        },
        {
            'year' : 2011,
            'p1' : 102,
            'p2' : 95,
            'p3' : 90,
            'p4' : 90,
            'p5' : 93
        }
      ];

      $scope.race = {
          'year': 2012,
          'p1': 0,
          'p2': 5,
          'p3': 10,
          'p4': 15,
          'p5': 20
      };
  });
