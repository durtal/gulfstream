'use strict';

/**
 * @ngdoc function
 * @name gulfstreamApp.controller:ZipfHcpvisCtrl
 * @description
 * # ZipfHcpvisCtrl
 * Controller of the gulfstreamApp
 */
angular.module('gulfstreamApp')
  .controller('ZipfHcpvisCtrl', function ($scope, _, $http, $window) {

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

      $scope.singleRace = {
          'p1' : 0,
          'p2' : 5,
          'p3' : 10,
          'p4' : 15,
          'p5' : 20
      };

/*  CODE FOR ZIPF RACE
      var x = [100, 	98, 	95, 	90, 	76];
      var y = [0, 5, 10, 15, 20];

      var z = [];

      for(var i = 0; i < x.length; i++) {
          z[i] = parseInt(x[i]) + parseInt(y[i]);
      }
      console.log(z);

      var winning = [];
      for(var t = 0; t < z.length; t++) {
          var zipf = 1 / (t + 1);
          winning[t] = parseInt(z[t]) * zipf;
      }

      console.log(winning);

      var total = _.reduce(winning, function(memo, num) {
          return memo + num;
      }, 0);
      console.log(total);

      var zipfs = [];

      for(var p = 0; p < winning.length; p++) {
          zipfs[p] = 1 / (p+1);
      }
      console.log(zipfs);

      var zipfTotal = _.reduce(zipfs, function(memo, num) {
          return memo + num;
      }, 0);
      console.log(zipfTotal);

      var rating = total / zipfTotal;
      console.log(rating);
*/

      $http.get('data/dummy-ratings.json').success(function(ratingsdata) {
          $scope.dummyRatings = ratingsdata;
          $scope.dummyWinningRatings = _.map($scope.dummyRatings, function(x) {
              return x.p1;
          });
          console.log($scope.dummyWinningRatings);

          // $window.d3 code for a histogram - taken from http://bl.ocks.org/mbostock/3048450
          var values = $window.d3.range(1000).map($window.d3.random.bates(2));

          var margin = {top: 10, right: 30, bottom: 30, left: 30},
          width = 550 - margin.left - margin.right,
          height = 340 - margin.top - margin.bottom;

          var x = $window.d3.scale.linear()
          .domain([0, 1])
          .range([0, width]);

          // Generate a histogram using twenty uniformly-spaced bins.
          var data = $window.d3.layout.histogram()
          .bins(x.ticks(20))
          (values);

          var y = $window.d3.scale.linear()
          .domain([0, $window.d3.max(data, function(d) { return d.y; })])
          .range([height, 0]);

          var xAxis = $window.d3.svg.axis()
          .scale(x)
          .orient('bottom');

          var svg = $window.d3.select('#test-histogram').append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

          var bar = svg.selectAll('.bar')
          .data(data)
          .enter().append('g')
          .attr('class', 'bar')
          .attr('transform', function(d) { return 'translate(' + x(d.x) + ',' + y(d.y) + ')'; });

          bar.append('rect')
          .attr('x', 1)
          .attr('width', x(data[0].dx) - 1)
          .attr('height', function(d) { return height - y(d.y); });

          bar.append('text')
          .attr('dy', '.75em')
          .attr('y', 6)
          .attr('x', x(data[0].dx) / 2)
          .attr('text-anchor', 'middle');

          svg.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis);

      });

      console.log($scope.dummyWinningRatings);
  });
