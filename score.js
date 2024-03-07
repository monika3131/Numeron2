// Iteration 8: Making scoreboard functional
var urlParams = new URLSearchParams(window.location.search);

var score = urlParams.get("score");

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button")

scoreBoard.innerHTML = score;

playAgainButton.onclick = ()=>{
    location.href = "./game.html";
}