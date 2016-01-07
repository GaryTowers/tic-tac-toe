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

        var players = [
            {
                name: 'Gary',
                avatar: '',
                icon: 'x'
            },
            {
                name: 'Robert',
                avatar: '',
                icon: 'o'
            }
        ];
        
        var currentPlayer = {};

        $scope.board = [];

        $scope.initGame = function () {
            $scope.board = [];
            $scope.board = GameManager.initGame(players, 6);
            $scope.currentPlayer = GameManager.getCurrentPlayer();
        };
        
        $scope.makeMove = function(row, col){
            var results = GameManager.playMove({row: row, col: col});
            if(results.status === 'WINNER'){
                // Display Winner
                alert('WINNER')
            }
            else if(results.status === 'TIE'){
                // Display tie
                alert('TIE')
            }
            else{
                // Game goes on, grab new current player
                $scope.currentPlayer = GameManager.getCurrentPlayer();
            }
        }

        $scope.initGame();
    }]);




