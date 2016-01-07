'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
    .controller('BoardCtrl', ['$scope', 'GameManager', function ($scope, GameManager) {


        $scope.player1 = {
            name: 'Gary',
            avatar: 'http://puu.sh/mmtH7/0746a4f105.jpg',
            icon: 'x',
            color: '#',
            selected: true
        },
        $scope.player2 = {
            name: 'Robert',
            avatar: 'http://puu.sh/mmuMC/b96a2882c7.png',
            icon: 'o',
            color: '#',
            selected: false
        }

        $scope.board = [];

        $scope.initGame = function () {
            $scope.board = [];
            $scope.emptyIcon = '';
            $scope.boardSize = 10;
            $scope.board = GameManager.initGame([$scope.player1, $scope.player2], $scope.boardSize, $scope.emptyIcon);
            $scope.currentPlayer = GameManager.getCurrentPlayer();
        };

        $scope.makeMove = function (row, col) {
            var results = GameManager.playMove({ row: row, col: col });
            if (results.status === 'WINNER') {
                // Display Winner
                alert('WINNER')
            }
            else if (results.status === 'TIE') {
                // Display tie
                alert('TIE')
            }
            else {
                // Game goes on...
            }
        }

        $scope.initGame();
    }]);




