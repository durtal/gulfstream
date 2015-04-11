'use strict';

/**
 * @ngdoc directive
 * @name gulfstreamApp.directive:rcapperD3Histogram
 * @description
 * # rcapperD3Histogram
 */
angular.module('gulfstreamApp')
  .directive('rcapperD3Histogram', function () {

    function link(scope, element, attr) {

        // svg dimensions
        var margin = {
                top: 10,
                right: 10,
                bottom: 40,
                left: 10
            },
            width = 550 - margin.left - margin.right,
            height = 340 - margin.top - margin.bottom;

        var svg = d3.select(element[0])
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        scope.$watch('data', function(data) {

            svg.selectAll('*').remove();

            var xmin = Math.floor(d3.min(data)), // watch
                xmax = Math.ceil(d3.max(data));

            var bins = xmax - xmin; // watch

            var x = d3.scale.linear() // watch
                .domain([0, bins])
                .range([0, width]);

            var x2 = d3.scale.linear() // watch
                .domain([xmin, xmax])
                .range([0, width]);

            var hist = d3.layout.histogram() // watch
                .bins(bins)(data);
                console.log(hist);

            var y = d3.scale.linear() // watch
                .domain([0, d3.max(hist, function(d) {
                    return d.y;
                })])
                .range([height, 0]);

            var xAxis = d3.svg.axis() // watch
                .scale(x2)
                .orient('bottom');

            svg.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var bar = svg.selectAll('.bar') // watch
                .data(hist)
                .enter()
                .append('g')
                .attr('class', 'bar')
                .attr('transform', function(d) {
                    return 'translate(' + x2(d.x) + ',' + y(d.y) + ')';
                })
                .style('fill', attr.fill);

            bar.append('rect') // watch
                .attr('x', 1)
                .attr('width', x(hist[0].dx))
                .attr('height', height - margin.botttom)
                .transition()
                .delay(function(d, i) {
                  return i * 100;
                })
                .duration(200)
                .attr('height', function(d) {
                    return height - y(d.y);
                });

            svg.append('g') // watch
                .attr('class', 'x-axis')
                .attr('transform', 'translate(0,' + height + ')')
                .call(xAxis);

        }, true);


    }
    return {
    //   template: '<div></div>',
      restrict: 'E',
      scope: {
          data: '='
      },
      link: link
    };
  });
