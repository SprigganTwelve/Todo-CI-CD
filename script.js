const startBtn = document.getElementById("startBtn");
const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");

const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const bestElement = document.getElementById("best");
const rankingElement = document.getElementById("ranking");
const winnerElement = document.getElementById("winner");
const playerInput = document.getElementById("playerName");

let score = 0;
let time = 10;
let timer = null;
let playing = false;

function moveTarget() {
  const maxX = gameArea.clientWidth - target.offsetWidth;
  const maxY = gameArea.clientHeight - target.offsetHeight;

  target.style.left = Math.random() * maxX + "px";
  target.style.top = Math.random() * maxY + "px";
}


function incrementScore() {
  score++;
  scoreElement.textContent = score;
}

function resetGame() {
  score = 0;
  scoreElement.textContent = "0";
}

target.addEventListener("click", () => {
  if (!playing) return;

  incrementScore()
  moveTarget();
});

startBtn.addEventListener("click", () => {
  const player = playerInput.value.trim();

  if (!player) {
    alert("Veuillez entrer votre prénom");
    return;
  }

  score = 0;
  time = 10;

  scoreElement.textContent = score;
  timeElement.textContent = time;

  playing = true;

  target.style.display = "block";
  moveTarget();

  clearInterval(timer);

  timer = setInterval(() => {
    time--;

    timeElement.textContent = time;

    if (time <= 0) {
      finishGame(player);
    }
  }, 1000);
});

function finishGame(player) {
  clearInterval(timer);

  playing = false;
  target.style.display = "none";

  const ranking = JSON.parse(
    localStorage.getItem("ranking") || "[]"
  );

  ranking.push({
    name: player,
    score: score
  });

  ranking.sort((a, b) => b.score - a.score);

  ranking.splice(10);

  localStorage.setItem(
    "ranking",
    JSON.stringify(ranking)
  );

  displayRanking();

  alert(`${player}, votre score est ${score}`);
}

function displayRanking() {
  const ranking = JSON.parse(
    localStorage.getItem("ranking") || "[]"
  );

  rankingElement.innerHTML = "";

  ranking.forEach((player, index) => {
    rankingElement.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.score}</td>
      </tr>
    `;
  });

  bestElement.textContent = ranking[0]?.score || 0;

  if (ranking.length > 0) {
    winnerElement.innerHTML =
      `🏆 ${ranking[0].name} gagne avec ${ranking[0].score} points`;
  }
}

displayRanking();


if(typeof module !== undefined){
    module.exports = {
        moveTarget,
        finishGame,
        resetGame,
        incrementScore,
        displayRanking
    }
}