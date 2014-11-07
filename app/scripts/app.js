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
              template: '<h1>Hello</h1>'
          })
          .state('track_profiles', {
              url: '/track_profiles',
              template: '<h2>Oh Hello Again</h2>'
          });
  }]);
