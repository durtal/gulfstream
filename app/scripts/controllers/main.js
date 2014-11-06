'use strict';

/**
 * @ngdoc function
 * @name gulfstreamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gulfstreamApp
 */
angular.module('gulfstreamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
