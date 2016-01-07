'use strict';

/**
 * @ngdoc overview
 * @name ticTacToeApp
 * @description
 * # ticTacToeApp
 *
 * Main module of the application.
 */
angular
  .module('ticTacToeApp', [
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
        templateUrl: 'views/game.html',
        controller: 'BoardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
