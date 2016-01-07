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
        description: 'Align 3 to win',
        winCount: 3,
        difficulty: 3
      },
      {
        title: 'x6',
        label: 'The Pro',
        description: 'Align 4 to win',
        winCount: 4,
        difficulty: 6
      },
      {
        title: 'x10',
        label: 'The Impossible',
        description: 'Align 8 to win',
        winCount: 8,
        difficulty: 10
      }

    ];

    $scope.select = function (option, index) {
      if ($scope.selectDifficulty) {
        $scope.selectDifficulty($scope.levels[index].difficulty, $scope.levels[index].winCount);
      }
    }
  }]);
