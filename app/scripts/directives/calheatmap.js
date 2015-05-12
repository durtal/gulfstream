'use strict';

/**
    * @ngdoc directive
    * @name gulfstreamApp.directive:calHeatmap
    * @description
    * # calHeatmap
*/
angular.module('gulfstreamApp')
    .directive('calHeatmap', function() {

        function link(scope, element, attr) {
            var config = scope.config || {};
            var element = element[0];
            var cal = new CalHeatMap();
            var defaults = {
                itemSelector: element,
                domain: 'month',
                subDomain: 'day',
                range: 3,
                cellSize: 14,
                legend: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                legendColors: {
                    min: '#D8D8D8',
                    max: '#D9220F',
                    empty: '#D8D8D8',
                    base: '#FCFCFC'
                }
            };
            angular.extend(defaults, config);
            cal.init(defaults);
        }

        return {
            template: '<div class="cal-heatmap" config="config"></div>',
            restrict: 'E',
            scope: {
                config: '='
            },
            link: link
        };
    });
