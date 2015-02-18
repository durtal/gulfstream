'use strict';

/**
 * @ngdoc directive
 * @name gulfstreamApp.directive:rcapperD3Histogram
 * @description
 * # rcapperD3Histogram
 */
angular.module('gulfstreamApp')
  .directive('rcapperD3Histogram', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the rcapperD3Histogram directive');
      }
    };
  });
