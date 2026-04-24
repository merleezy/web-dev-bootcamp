const pointSelect = document.querySelector("#pointSelect");
const resetButton = document.querySelector("#resetButton");

let playerOne = {
  score: 0,
  display: document.querySelector("#playerOneDisplay"),
  button: document.querySelector("#playerOneButton"),
};

let playerTwo = {
  score: 0,
  display: document.querySelector("#playerTwoDisplay"),
  button: document.querySelector("#playerTwoButton"),
};

const players = [playerOne, playerTwo];
let isGameOver = false;

playerOne.button.addEventListener("click", () => {
  scorePoint(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", () => {
  scorePoint(playerTwo, playerOne);
});

resetButton.addEventListener("click", reset);
pointSelect.addEventListener("change", reset);

function reset() {
  isGameOver = false;
  for (let player of players) {
    player.score = 0;
    player.display.textContent = "0";
    player.display.classList.remove("winner", "loser");
    player.button.disabled = false;
  }
}

function scorePoint(player, opponent) {
  if (isGameOver) return;
  const winningScore = parseInt(pointSelect.value, 10);

  player.score++;
  player.display.textContent = player.score;

  if (player.score >= winningScore && player.score - opponent.score >= 2) {
    isGameOver = true;
    player.display.classList.add("winner");
    opponent.display.classList.add("loser");
    player.button.disabled = true;
    opponent.button.disabled = true;
  }
}
