'use strict'
let gameEnd, chance;
const winBoardVal = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const boardReference = document.querySelectorAll('.cell');
let board;
startGame();
function startGame() {
    gameEnd = false;
    board = ['','','','','','','','',''];
    chance = 'X';
    document.body.style.background = "#512DA8"
    for(let i=0;i<boardReference.length;i++) {
        boardReference[i].style.cursor = "pointer";
    }
    for(let i=0; i<boardReference.length;i++) {
        boardReference[i].innerText = '';
        boardReference[i].style.removeProperty('background-color');
        boardReference[i].addEventListener('click',clickFunc,false);
    }
}

function clickFunc(square) {
    if(board[square.target.id]==='' && !gameEnd) {
        board[square.target.id] = chance;
        boardReference[square.target.id].innerText = chance;
        checkWin();
        chance === 'X' ? chance = 'O' : chance = 'X';
    }
}

function checkWin() {
    let currentWinVals;
    let flag = false;
    console.log("Value of board[winbOARD]",board[winBoardVal[0][0]]);
    for(let i=0;i<winBoardVal.length;i++) {
        if(board[winBoardVal[i][0]] === chance && board[winBoardVal[i][1]] === chance && board[winBoardVal[i][2]] === chance) {
            currentWinVals = winBoardVal[i];
            flag = true;
            break;
        }
    }
    console.log(currentWinVals);
    if(!flag && isBoardFilled()) {
        document.body.style.background = "#D32F2F";
        for(var i=0;i<boardReference.length;i++) {
            boardReference[i].style.cursor = "default"
        }
        gameEnd = true;
    } else if(flag) {
        for(let i=0;i<3;i++) {
            boardReference[currentWinVals[i]].style.background = "#388E3C";
        }
        for(let i=0;i<board.length;i++) {
            if(i !== currentWinVals[0] && i!== currentWinVals[1] && i!==currentWinVals[2]) {
                boardReference[i].style.background = "#D32F2F";
            }
        }
        
        for(var i=0;i<boardReference.length;i++) {
            boardReference[i].style.cursor = "default"
        }
        gameEnd = true;
        
    }
    
}

function isBoardFilled() {
    for(let i=0;i<board.length;i++) {
        if(board[i]==='') {
            return false;
        }
    }
    return true;
}