'use strict';

/**
 * @ngdoc function
 * @name ticTacToeApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the ticTacToeApp
 */
angular.module('ticTacToeApp')
    .controller('GameCtrl', ['$scope', function ($scope) {
        $scope.board = createNewBoard(5, 5);
        console.log('Board length: ', $scope.board.length, $scope.board);
    }]);




var board = [];
var PLAYER1 = 'x';
var PLAYER2 = 'o';
var EMPTYSPACE = '-';
var currentPlayer = PLAYER1;

function makeMove(move) {
    var player = currentPlayer;
    console.log('Player ' + player + ' made a move at ', move)
    if (isMoveValid(move)) {
        
        board[move.x][move.y] = player;
        
        if (checkWin(player, move)) {
            alert('Player ' + currentPlayer + ' won the game!');
        }
        else {
            switchCurrentPlayer();
        }
    }
    else{
        console.log('Invalid move');
    }

    return board;
}

function checkWin(player, lastMove) {
    
    var winCount = board.length;
    var isWinningMove = false;
    
    // Count the consecutive symbols of the player based on the last move
    // The count is checked col, row, left diagonal and right diagonal
    // While counting, if no consecutive symbol is found, the count is reset
    var colsCount = 0;
    var rowsCount = 0;
    var leftDiagonalCount = 0;
    var rightDiagonalCount = 0
    
    for(var i = 0; i < board.length; i++){
        
        // Count consecutive col symbols
        if(board[lastMove.x][i] === player){
            colsCount++;
        }
        else{
            colsCount = 0;
        }
        
        // Count consecutive row symbols
        if(board[i][lastMove.y] === player){
            rowsCount++;
        }
        else{
            rowsCount = 0;
        }
        
        // Count consecutive left diagonal symbols
        var leftDiagonalRow = (lastMove.x - lastMove.y) + i;
        leftDiagonalRow = (leftDiagonalRow < 0)? 0 : leftDiagonalRow;
        leftDiagonalRow = (leftDiagonalRow >= board.length - 1)? board.length - 1 : leftDiagonalRow;
        if(board[leftDiagonalRow][i] === player){
            leftDiagonalCount++;
        }
        else{
            leftDiagonalCount = 0;
        }
        
        
        // Count consecutive right diagonal symbols
        var rightDiagonalRow = (lastMove.x + lastMove.y) + i;
        rightDiagonalRow = (rightDiagonalRow < 0)? 0 : rightDiagonalRow;
        rightDiagonalRow = (rightDiagonalRow > board.length - 1)? board.length - 1 : rightDiagonalRow;
        if(board[rightDiagonalRow][i] === player){
            rightDiagonalCount++;
        }
        else{
            rightDiagonalCount = 0;
        }
        
        // If the consecutive symbols counts are greater or equal than the count required to win then this is a winning move 
        isWinningMove = (colsCount >= winCount || rowsCount >= winCount || leftDiagonalCount >= winCount || rightDiagonalCount >= winCount);
        if(isWinningMove){
            break;
        }        
    }
    
    
    
    return isWinningMove;
}

function switchCurrentPlayer() {
    currentPlayer = (currentPlayer === PLAYER1) ? PLAYER2 : PLAYER1;
}

function isMoveValid(move) {
    var valid = false;
    if ((move.x >= 0 && move.x < board.length) &&
        (move.y >= 0 && move.y < board.length) &&
        (board[move.x][move.y] === EMPTYSPACE)){
        valid = true;
    }
    return valid;
}

function createNewBoard(columns, rows) {
    var newBoard = [];

    for (var colIndex = 0; colIndex < columns; colIndex++) {
        newBoard[colIndex] = [];
        for (var rowIndex = 0; rowIndex < rows; rowIndex++) {
            newBoard[colIndex][rowIndex] = EMPTYSPACE;
        }
    }
    return newBoard;
}
