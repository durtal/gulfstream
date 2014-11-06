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
  .config(function($stateProvider, $urlRouterProvider) {
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
          });
  });
