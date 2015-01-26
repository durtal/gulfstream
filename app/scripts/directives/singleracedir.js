'use strict';

/**
 * @ngdoc directive
 * @name gulfstreamApp.directive:singleRaceDir
 * @description
 * # singleRaceDir
 */
angular.module('gulfstreamApp')
  .directive('singleRaceDir', function () {
    return {
      templateUrl: 'views/directiveViews/singleRaceDir.tpl.html',
      restrict: 'E',
      scope: {
          race: '='
      },
      link: function postLink() {

      }
    };
  });
