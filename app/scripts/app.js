'use strict';

/**
 * @ngdoc overview
 * @name gulfstreamApp
 * @description
 * # gulfstreamApp
 *
 * Main module of the application.
 */
angular
  .module('gulfstreamApp', [
    'ui.router',
    'ngResource'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
          })
          .state('about', {
              url: '/about',
              templateUrl: 'views/about.html',
          })
          .state('ratings', {
              url: '/ratings',
              templateUrl: 'views/ratings.html'
          })
          .state('track_profiles', {
              url: '/track-profiles',
              templateUrl: 'views/track_profiles.html'
          })
          .state('track_profiles.5fturf', {
              url: '/5-furlong-races',
              templateUrl: 'views/track_profiles.5fturf.html'
          })
          .state('track_profiles.111', {
              url: '/111',
              template: '<div class="container"><p>happy again</p></div>'
          });
  }]);
