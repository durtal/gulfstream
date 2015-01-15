"use strict";angular.module("gulfstreamApp",["ui.router","ngResource","angularUtils.directives.dirPagination"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home"),a.state("home",{url:"/home",templateUrl:"views/main.html",controller:"RatingsCtrl"}).state("about",{url:"/about",templateUrl:"views/about.html"}).state("ratings",{url:"/ratings",templateUrl:"views/ratings.html",controller:"RatingsCtrl"}).state("ratings.all",{url:"/all",templateUrl:"views/all_ratings.html",controller:"RatingsCtrl"}).state("ratings.horse",{url:"/horse/{horse_id}",templateUrl:"views/horse.html",controller:"HorseCtrl"}).state("ratings.handicappingmethod",{url:"/handicapping-method",templateUrl:"views/handicapping/handicapping_method.html"}).state("track_profiles",{url:"/track-profiles",templateUrl:"views/track_profiles.html"}).state("track_profiles.5f",{url:"/5-furlong-profile",templateUrl:"views/track_profiles/5f.html"}).state("track_profiles.5-5f",{url:"/5.5-furlong-profile",templateUrl:"views/track_profiles/5-5f.html"}).state("track_profiles.6f",{url:"/6-furlong-profile",templateUrl:"views/track_profiles/6f.html"}).state("track_profiles.6-5f",{url:"/6.5-furlong-profile",templateUrl:"views/track_profiles/6-5f.html"}).state("track_profiles.7f",{url:"/7-furlong-profile",templateUrl:"views/track_profiles/7f.html"}).state("track_profiles.7-5f",{url:"/7.5-furlong-profile",templateUrl:"views/track_profiles/7-5f.html"}).state("track_profiles.8f",{url:"/8-furlong-profile",templateUrl:"views/track_profiles/8f.html"}).state("track_profiles.8-5f",{url:"/8.5-furlong-profile",templateUrl:"views/track_profiles/8-5f.html"}).state("track_profiles.9f",{url:"/9-furlong-profile",templateUrl:"views/track_profiles/9f.html"}).state("track_profiles.11-12f",{url:"/11-to-12-furlong-profile",templateUrl:"views/track_profiles/11-12f.html"})}]),angular.module("gulfstreamApp").controller("RatingsCtrl",["$scope","RcappeRHorses",function(a,b){a.currentPage=1,a.pageSize=10,b.getRatings(function(b){a.horses=b}),a.predicate="-n_races"}]),angular.module("gulfstreamApp").factory("RcappeRHorses",["$http",function(a){var b={};return b.getRatings=function(b){a.get("data/gulfstream-ratings.json").success(b)},b}]),angular.module("gulfstreamApp").controller("HorseCtrl",["$scope","RcappeRHorses","_","$stateParams",function(a,b,c,d){b.getRatings(function(b){a.all=b,a.horse=c.findWhere(a.all,{_id:d.horse_id}),console.log(d.horse_id),a.races=a.horse.races})}]),angular.module("gulfstreamApp").factory("_",function(){return window._});