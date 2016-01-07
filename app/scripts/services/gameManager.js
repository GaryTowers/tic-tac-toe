'use strict';

/**
 * @ngdoc service
 * @name ticTacToeApp.GameManager
 * @description
 * # GameManager
 * Factory in the ticTacToeApp.
 */
angular.module('ticTacToeApp')
  .factory('GameManager', function () {

    var board = [];
    var players = [];
    var currentPlayer = {};
    var currentTurn = 0;
    var config = {
      size: 3,
      emptyIcon: '',
      winCount: 3
    }

    function playMove(move) {
      var player = currentPlayer;
      var results = {
        status: 'NONE',
        player: player
      };
      // If move is invalid return
      if (!isMoveValid(move)) {
        results.status = 'INVALID_MOVE';
        return results;
      }
      
      // Make move
      board[move.row][move.col] = player.icon;

      // Check if the move was the winner move or a tie, if none of those then keep playing
      if (checkForkWin(player.icon, move)) {
        results.status = 'WINNER';
      }
      else {
        nextTurn();
        if(results.status !== 'WINNER' && currentTurn >= config.size * config.size){
          results.status = 'TIE';
        }
      }
      
      return results;
    }

    function checkForkWin(playerIcon, lastMove) {

      var winCount = config.winCount;
      var isWinningMove = false;
    
      // Count the consecutive symbols of the player based on the last move
      // The count is checked col, row, left diagonal and right diagonal
      // While counting, if no consecutive symbol is found, the count is reset
      var colsCount = 0;
      var rowsCount = 0;
      var leftDiagonalCount = 0;
      var rightDiagonalCount = 0

      for (var i = 0; i < board.length; i++) {
        
        // Count consecutive col symbols
        if (board[lastMove.row][i] === playerIcon) {
          colsCount++;
        }
        else {
          colsCount = 0;
        }
        
        // Count consecutive row symbols
        if (board[i][lastMove.col] === playerIcon) {
          rowsCount++;
        }
        else {
          rowsCount = 0;
        }
        
        // Count consecutive left diagonal symbols
        var leftDiagonalRow = (lastMove.row - lastMove.col) + i;        
        // If is not in boundaries then just ignore
        if(leftDiagonalRow >= 0 && leftDiagonalRow < config.size){
          if (board[leftDiagonalRow][i] === playerIcon) {
            leftDiagonalCount++;
          }
          else {
            leftDiagonalCount = 0;
          }
        }
        
        
        
        // Count consecutive right diagonal symbols
        var rightDiagonalRow = (lastMove.row + lastMove.col) - i;
        // If is not in boundaries then just ignore
        if(rightDiagonalRow >= 0 && rightDiagonalRow < config.size){
          if (board[rightDiagonalRow][i] === playerIcon) {
            rightDiagonalCount++;
          }
          else {
            rightDiagonalCount = 0;
          }
        }
        
        // If the consecutive symbols counts are greater or equal than the count required to win then this is a winning move 
        isWinningMove = (colsCount >= winCount || rowsCount >= winCount || leftDiagonalCount >= winCount || rightDiagonalCount >= winCount);
        if (isWinningMove) {
          break;
        }
      }
      return isWinningMove;
    }

    function nextTurn() {
      currentPlayer.selected = false;
      players.push(currentPlayer);
      players.shift();
      
      players[0].selected = true;
      currentPlayer = players[0];
      
      currentTurn++;
    }

    function isMoveValid(move) {
      var valid = false;
      if ((move.row >= 0 && move.row < board.length) &&
        (move.col >= 0 && move.col < board.length) &&
        (board[move.row][move.col] === config.emptyIcon)) {
        valid = true;
      }
      return valid;
    }

    function createNewBoard(columns, rows) {
      var newBoard = [];
      for (var colIndex = 0; colIndex < columns; colIndex++) {
        newBoard[colIndex] = [];
        for (var rowIndex = 0; rowIndex < rows; rowIndex++) {
          newBoard[colIndex][rowIndex] = config.emptyIcon;
        }
      }
      return newBoard;
    }


    return {
      initGame: function (playersList, size, winCount, emptyIcon) {
        players = playersList;
        currentPlayer = playersList[0];
        config.size = size || config.size;
        config.emptyIcon = emptyIcon || config.emptyIcon;
        config.winCount = winCount || config.winCount;
        
        currentTurn = 0;
        
        board = createNewBoard(size, size);
        return board;
      },
      
      playMove: function(newMove){
        return playMove(newMove);
      },

      getCurrentPlayer: function () {
        return currentPlayer;
      },
      
      getCurrentTurn: function(){
        return currentTurn;
      }
    };
  });
