'use strict';

/**
 * @ngdoc service
 * @name gulfstreamApp.RcappeRHorses
 * @description
 * # RcappeRHorses
 * Factory in the gulfstreamApp.
 */
angular.module('gulfstreamApp')
  .factory('RcappeRHorses', function ($http) {
    // Service logic
    // ...

    var service = {};

    service.getHorses = function(callback) {
        $http.get('data/GULFHORSES.json')
            .success(callback);
    };

    service.getHKJC = function(callback) {
        $http.get('data/hkjc.json')
            .success(callback);
    };

    return service;
  });
