'use strict';

/**
 * @ngdoc overview
 * @name fishApp
 * @description
 * # fishApp
 *
 * Main module of the application.
 */
angular
  .module('fishApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/fish.html',
        controller: 'FishCtrl',
        controllerAs: 'fish'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
