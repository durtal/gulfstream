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

    service.getRatings = function(callback) {
        $http.get('data/gulfstream-ratings.json')
            .success(callback);
    };

    return service;
  });
