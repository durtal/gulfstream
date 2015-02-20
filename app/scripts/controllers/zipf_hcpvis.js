'use strict';

/**
 * @ngdoc function
 * @name gulfstreamApp.controller:ZipfHcpvisCtrl
 * @description
 * # ZipfHcpvisCtrl
 * Controller of the gulfstreamApp
 */
angular.module('gulfstreamApp')
    .controller('ZipfHcpvisCtrl', function ($scope, _, $http, d3) {

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

        $scope.unratedRace = {
          'year': 2012,
          'p1': 0,
          'p2': 5,
          'p3': 10,
          'p4': 15,
          'p5': 20
        };

        $scope.unratedRace2 = {
            'year': 2012,
            'p1': 0,
            'p2': 5,
            'p3': 10,
            'p4': 15,
            'p5': 20
        };

        $scope.singleRace = {
          'p1' : 100,
          'p2' : 95,
          'p3' : 90,
          'p4' : 85,
          'p5' : 80
        };

        function zipfRace(diff, pastRace) {
            var wgtRtgs = {
                'p1': pastRace.p1 + parseInt((diff.p1)),
                'p2': pastRace.p2 + parseInt((diff.p2)),
                'p3': pastRace.p3 + parseInt((diff.p3)),
                'p4': pastRace.p4 + parseInt((diff.p4)),
                'p5': pastRace.p5 + parseInt((diff.p5))
            };
            wgtRtgs = {
                'p1': wgtRtgs.p1 * 1/1,
                'p2': wgtRtgs.p2 * 1/2,
                'p3': wgtRtgs.p3 * 1/3,
                'p4': wgtRtgs.p4 * 1/4,
                'p5': wgtRtgs.p5 * 1/5
            };
            var total = wgtRtgs.p1 + wgtRtgs.p2 + wgtRtgs.p3 + wgtRtgs.p4 + wgtRtgs.p5;
            var zipfs = 1/1 + 1/2 + 1/3 + 1/4 + 1/5;
            var rating = total / zipfs;

            return rating;
        }
        $scope.unratedRaceRating = zipfRace($scope.unratedRace2, $scope.ExampleRaces[0]);

        $scope.$watch('unratedRace2', function(data) {
            $scope.unratedRaceRating = zipfRace(data, $scope.ExampleRaces[0]);
        }, true);

        $http.get('data/dummy-ratings.json').success(function(ratingsdata) {
            $scope.dummyRatings = ratingsdata;
            $scope.dummyWinningRatings = _.map($scope.dummyRatings, function(x) {
                return x.p1;
            });

            $scope.zipfHcpRatings = [];
            _.each($scope.dummyRatings, function(element, index) {
                var y = zipfRace($scope.unratedRace2, element);
                $scope.zipfHcpRatings[index] = y;
            });
            $scope.avgRtg = d3.mean($scope.zipfHcpRatings);


            $scope.unratedRace3 = {
                'p1': 0,
                'p2': 5,
                'p3': 10,
                'p4': 15,
                'p5': 20
            };

            $scope.$watch('unratedRace3', function(data) {
                var race = data;
                _.each($scope.dummyRatings, function(element, index) {
                    var y = zipfRace(race, element);
                    $scope.zipfHcpRatings[index] = y;
                });
                $scope.avgRtg = d3.mean($scope.zipfHcpRatings);
            }, true);

        });
  });
