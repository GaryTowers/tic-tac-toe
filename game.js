var board = [];

function makeMove(player, position){
    board[position] = player;
    return board;
}


function checkWin(player, lastMove){
    return true;
}

function isMoveValid(player, position){
    return true;
}


function createNewBoard(width, height){
    var newBoard = [];
    return newBoard;
}
