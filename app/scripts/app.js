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
    'ngResource',
    'angularUtils.directives.dirPagination'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'views/main.html',
              controller: 'RatingsCtrl'
          })
          .state('about', {
              url: '/about',
              templateUrl: 'views/about.html',
          })
          .state('ratings', {
              url: '/ratings',
              templateUrl: 'views/ratings.html',
              controller: 'RatingsCtrl'
          })
          .state('ratings.all', {
              url: '/all',
              templateUrl: 'views/all_ratings.html',
              controller: 'RatingsCtrl'
          })
          .state('ratings.horse', {
              url: '/horse/{horse_id:[A-Za-z]{1}[0-9]{3}}',
              templateUrl: 'views/horse.html',
              controller: 'HorseCtrl'
          })
          .state('ratings.methodology', {
              url: '/methodology',
              templateUrl: 'views/methodology.html'
          })
          .state('track_profiles', {
              url: '/track-profiles',
              templateUrl: 'views/track_profiles.html'
          })
          .state('track_profiles.5f', {
              url: '/5-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.5f.html'
          })
          .state('track_profiles.5-5f', {
              url: '/5.5-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.5-5f.html'
          })
          .state('track_profiles.6f', {
              url: '/6-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.6f.html'
          })
          .state('track_profiles.6-5f', {
              url: '/6.5-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.6-5f.html'
          })
          .state('track_profiles.7f', {
              url: '/7-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.7f.html'
          })
          .state('track_profiles.7-5f', {
              url: '/7.5-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.7-5f.html'
          })
          .state('track_profiles.8f', {
              url: '/8-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.8f.html'
          })
          .state('track_profiles.8-5f', {
              url: '/8.5-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.8-5f.html'
          })
          .state('track_profiles.9f', {
              url: '/9-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.9f.html'
          })
          .state('track_profiles.11-12f', {
              url: '/11-to-12-furlong-profile',
              templateUrl: 'views/track_profiles/track_profiles.11-12f.html'
          })
;
  }]);
