'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
  .controller('SettingsCtrl', ['$scope', function ($scope) {
    
    $scope.levels = [
      {
        title: 'x3',
        label: 'The classic',
        difficulty: 3,
        selected: true
      }, 
      {
        title: 'x5',
        label: 'The Pro',
        difficulty: 5,
        selected: false
      },
      {
        title: 'x10',
        label: 'The Impossible',
        difficulty: 10,
        selected: false
      }
      
    ];
    
    
  }]);
