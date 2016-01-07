'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
    .controller('BoardCtrl', ['$scope', 'GameManager', '$timeout', function ($scope, GameManager, $timeout) {


        $scope.player1 = {
            name: 'John',
            avatar: '/images/avatars/guy.jpg',
            icon: 'x',
            color: '#',
            selected: false
        },
        $scope.player2 = {
            name: 'Rebel',
            avatar: '/images/avatars/rebel.png',
            icon: 'o',
            color: '#',
            selected: false
        }

        $scope.board = [];

        $scope.initGame = function () {
            $scope.showBoard = false;
            $scope.player1.selected = true;
            $scope.player2.selected = true;
            $timeout(function () {
                $scope.player2.selected = false;
                $scope.board = [];
                $scope.emptyIcon = '';
                $scope.boardSize = 10;
                $scope.board = GameManager.initGame([$scope.player1, $scope.player2], $scope.boardSize, $scope.emptyIcon);
                $scope.showBoard = true;
            }, 1000);

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




