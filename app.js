let currentPlayer = "X";
let gameEnded = false;
const dashbord=document.getElementById("scoreDashbord");
const cells = document.querySelectorAll(".cell");

function handleCellClick(e) {
  if (gameEnded) {
    return;
  }

  if (e.target.textContent !== "") {
    return;
  }

  e.target.textContent = currentPlayer;

  if (checkForWin()) {
    dashbord.innerHTML=`${currentPlayer }  wins! `;
    gameEnded = true;
    return;
  }

  if (checkForDraw()) {
    dashbord.innerHTML="Draw!";
    gameEnded = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

function checkForDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }

  return true;
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));

function Refresh(){
location.reload();
}