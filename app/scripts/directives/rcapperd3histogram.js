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

        // svg dimensions, use parentElement width
        var margin = {
                top: 10,
                right: 10,
                bottom: 30,
                left: 40
            },
            parentWidth = element[0].parentElement.offsetWidth,
            width = parentWidth - margin.left - margin.right,
            parentHeight = parentWidth / 5 * 3,
            height = parentHeight - margin.top - margin.bottom;

        // create svg element
        var svg = d3.select(element[0])
            .append('svg');
        // watch for window resizing
        window.onresize = function() {
            scope.$apply();
        };
        // watch for data changing, redraw plot
        scope.$watch('data', function(data) {
            scope.render(data);
        }, true);
        // watch for parentElement changing size
        scope.$watch(function() {
            return element[0].parentElement.offsetWidth;
        }, function(data) {

            parentWidth = data,
            width = parentWidth - margin.left - margin.right,
            parentHeight = parentWidth / 5 * 3,
            height = parentHeight - margin.top - margin.bottom;

            svg.attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);

            scope.render(scope.data);
        });

        scope.render = function(data) {
            // remove old plot
            svg.selectAll('*').remove();
            // set attributes of plotting area
            svg.attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);
            // calculate min and max of data
            var xmin = Math.floor(d3.min(data)),
                xmax = Math.ceil(d3.max(data));
            // if element contains attr's use them
            if(attr.min && attr.max) {
                xmin = parseInt(attr.min);
                xmax = parseInt(attr.max);
            }
            // calculate the number of bins
            var bins = (xmax - xmin);
            // use attr's if provided
            if(attr.bw) {
                bins = bins / attr.bw;
            }
            // create x scale function
            var x = d3.scale.linear()
                .domain([0, bins])
                .range([0, width]);
            // create x-axis scale function
            var x2 = d3.scale.linear()
                .domain([xmin, xmax])
                .range([0, width]);
            // create histogram layout
            var hist = d3.layout.histogram()
                .frequency(false)
                .bins(bins)(data);
            // create y scale function
            var y = d3.scale.linear() // watch
                .domain([0, d3.max(hist, function(d) {
                    return d.y;
                })])
                .range([height, 0]);
            // create x-axis function
            var xAxis = d3.svg.axis()
                .scale(x2)
                .orient('bottom');
            // create y-axis function
            var yAxis = d3.svg.axis()
                .scale(y)
                .orient('left');
            // create chart element inside svg
            var chart = svg.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            // add bars using hist data
            var bar = chart.selectAll('.bar') // watch
                .data(hist)
                .enter()
                .append('g')
                .attr('class', 'bar')
                .attr('transform', function(d) {
                    return 'translate(' + x2(d.x) + ',' + y(d.y) + ')';
                })
                .style('fill', attr.fill);
            // apend rect's to bars
            bar.append('rect') // watch
                .attr('class', 'bar')
                .attr('width', x(hist[0].dx))
                .attr('height', height - margin.botttom)
                .transition()
                .delay(function(d, i) {
                  return i * 100;
                })
                .duration(1000)
                .attr('height', function(d) {
                    return height - y(d.y);
                });
            // add the x-axis
            chart.append('g') // watch
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + height + ')')
                .call(xAxis);
            // add the y-axis
            chart.append('g')
                .attr('class', 'y axis')
                .call(yAxis);
        };

    }
    return {
      restrict: 'E',
      scope: {
          data: '='
      },
      link: link
    };
  });
