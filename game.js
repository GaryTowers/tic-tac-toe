var board = [];
var PLAYER1 = 'x';
var PLAYER2 = 'o';
var EMPTYSPACE = '-';
var currentPlayer = PLAYER1;

function makeMove(move) {
    var player = currentPlayer;
    console.log('Player ' + player + ' made a move at ', move)
    if (isMoveValid(move)) {
        setCell(player, move);
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
    return false;
}

function setCell(value, move) {
    board[move.x][move.y] = value;
}

function switchCurrentPlayer() {
    currentPlayer = (currentPlayer === PLAYER1) ? PLAYER2 : PLAYER1;
}

function isMoveValid(move) {
    var valid = false;
    if (board[move.x][move.y] === EMPTYSPACE) {
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
