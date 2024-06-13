const player = document.querySelector(".player");
const obstacle = document.querySelector(".obstacle img");
const gameOverText = document.querySelector(".game-over");
const candy = document.querySelector("#candy");
let score = document.querySelector(".score");
const candy2 = document.getElementById("candy_2");
const candy3 = document.getElementById("candy_3");
const candy4 = document.getElementById("candy_4");

let isJumping = false;
let isGameOver = false;
let scoreAPoint = 0;

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 32 && !isJumping && !isGameOver) {
    e.preventDefault();
    isJumping = true;
    player.style.animation = "jump 0.5s";
    setTimeout(() => {
      player.style.animation = "";
      isJumping = false;
    }, 900);
  }
});

function checkScore(){
    if  (scoreAPoint == 4){
        document.getElementById("win").style.display = "block";
        document.querySelector(".grass").style.display = "none";
        document.querySelector(".game").style.display = "none";
        obstacle.style.animation = "none";
        player.style.display = "none"
        candy.style.animation = "none";
        candy.style.display = "none";
        candy2.style.display = "none";
        candy3.style.display = "none";
        candy4.style.display = "none";
        obstacle.style.display = "none";
    }
}


function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();
  const candyRect = candy.getBoundingClientRect();
  const candy2Rect = candy2.getBoundingClientRect();
  const candy3Rect = candy3.getBoundingClientRect();
  const candy4Rect = candy4.getBoundingClientRect();

  // Check collision with obstacle
  if (
    playerRect.right > obstacleRect.left &&
    playerRect.left < obstacleRect.right &&
    playerRect.bottom > obstacleRect.top &&
     playerRect.top < obstacleRect.bottom
   ) {
    gameIsOver();
    return;
}

  if (
    playerRect.right > candyRect.left &&
    playerRect.left < candyRect.right &&
    playerRect.bottom > candyRect.top &&
    playerRect.top < candyRect.bottom
  ) {
    scoreAPoint++;
    score.innerText = scoreAPoint;
    candy.style.display = "none";
    return;
  }

  if (
    playerRect.right > candy2Rect.left &&
    playerRect.left < candy2Rect.right &&
    playerRect.bottom > candy2Rect.top &&
    playerRect.top < candy2Rect.bottom
  ) {
    scoreAPoint++;
    score.innerText = scoreAPoint;
    candy2.style.display = "none";
    return;
  }
  if (
    playerRect.right > candy3Rect.left &&
    playerRect.left < candy3Rect.right &&
    playerRect.bottom > candy3Rect.top &&
    playerRect.top < candy3Rect.bottom
  ) {
    scoreAPoint++;
    score.innerText = scoreAPoint;
    candy3.style.display = "none";
    return;
  }

  if (
    playerRect.right > candy4Rect.left &&
    playerRect.left < candy4Rect.right &&
    playerRect.bottom > candy4Rect.top &&
    playerRect.top < candy4Rect.bottom
  ) {
    scoreAPoint++;
    score.innerText = scoreAPoint;
    candy4.style.display = "none";
    return;
  }

  checkScore();
}
setInterval(checkCollision, 10);

function gameIsOver() {
  document.getElementById("player_img").src = "./img/playerstop.png";
  document.querySelector(".grass").style.animationPlayState = "paused";
  isGameOver = true;
  player.style.animation = "none";
  obstacle.style.animation = "none";
  candy.style.animation = "none";
  candy.style.display = "none";
  candy2.style.display = "none";
  candy3.style.display = "none";
  candy4.style.display = "none";
  obstacle.style.display = "none";
  gameOverText.style.display = "block";
}

function refreshPage() {
  window.location.reload();
}
