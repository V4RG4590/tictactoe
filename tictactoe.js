let board = ["", "", "", "", "", "", "", "", ""]; // represents the current state of the board
let player = "X"; // represents the current player
let turn = document.getElementById("turn");
let cells = document.getElementsByTagName("td");
let resetButton = document.getElementById("reset");

// function to reset the game
function reset() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].style.backgroundColor = "white";
  }
  board = ["", "", "", "", "", "", "", "", ""];
  player = "X";
  turn.textContent = "X's Turn";
}

// function to check if a player has won
function checkWin() {
  if (
    (board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  ) {
    return true;
  }
  return false;
}

// function to check if the board is full
function checkDraw() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      return false;
    }
  }
  return true;
}

// function to handle a move
function handleClick(event) {
  let cell = event.target;
  let id = cell.getAttribute("id");
  if (board[id] === "") {
    board[id] = player;
    cell.textContent = player;
    if (checkWin()) {
      turn.textContent = player + " Wins!";
      for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", handleClick);
      }
    } else if (checkDraw()) {
      turn.textContent = "Draw!";
    } else {
      player = player === "X" ? "O" : "X";
      turn.textContent = player + "'s Turn";
    }
  }
}

// event listener for cells
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleClick);
}

// event listener for reset button
resetButton.addEventListener("click", reset);
