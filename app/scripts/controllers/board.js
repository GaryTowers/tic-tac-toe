'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
    .controller('BoardCtrl', ['$scope', 'GameManager', '$timeout', 'ngDialog', function ($scope, GameManager, $timeout, ngDialog) {


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
        $scope.hasGameEnded = false;

        $scope.initGame = function (boardSize, winCount) {
            $scope.hasGameEnded = false;
            $scope.player1.selected = true;
            $scope.player2.selected = true;
            $timeout(function () {
                $scope.player2.selected = false;
                $scope.board = [];
                $scope.emptyIcon = '';
                $scope.boardSize = boardSize || 3;
                $scope.winCount = winCount || 3
                $scope.board = GameManager.initGame([$scope.player1, $scope.player2], $scope.boardSize, $scope.winCount, $scope.emptyIcon);
                $scope.showBoard = true;
            }, 500);

        };

        $scope.makeMove = function (row, col) {
            if ($scope.hasGameEnded) {
                return false;
            }
            var results = GameManager.playMove({ row: row, col: col });
            if (results.status === 'WINNER') {
                // Display Winner
                $scope.hasGameEnded = true;
                $scope.gameResultsDialog = ngDialog.open({
                    template: '<center><h3>Congratulations ' + results.player.name + ' you won!</h3></center>',
                    scope: $scope,
                    plain: true
                });

            }
            else if (results.status === 'TIE') {
                // Display tie
                $scope.hasGameEnded = true;
                $scope.player1.selected = true;
                $scope.player2.selected = true;
                
                
                $scope.gameResultsDialog = ngDialog.open({
                    template: '<center><h3>Woah its a tie!</h3></center>',
                    scope: $scope,
                    plain: true
                });
            }
            else {
                $scope.hasGameEnded = false;
                // Game goes on...
            }
        }

        $scope.selectDifficulty = function (size, winCount) {
            ngDialog.close($scope.settingsDialog);
            $scope.initGame(size, winCount);
        }


        $scope.showSettings = function () {
            $scope.settingsDialog = ngDialog.open({
                template: 'views/settings.html',
                scope: $scope
            });
        };

        $scope.initGame();


    }]);




