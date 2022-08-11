const choices = ["rock", "paper", "scissors"];
const winners = [];
const NUM_ROUNDS = 5;

function resetGame() {

}

function startGame() {
    const queryStr = ".playerBtns > button";
    const playerButtons = document.querySelectorAll(queryStr);
    playerButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            playRound(btn.className);
        })
    })
}

/* Plays one round of RPS if the game is not over. */
function playRound(playerSelection) {
    const numWins = checkWins();
    if (numWins >= 5) {
        return;
    }
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    updateCounts();
    displayRound(playerSelection, computerSelection, winner);
}

/* Displays what the player chose, computer chose, and who won
the round. */
function displayRound(playerSelection, computerSelection, winner) {

}

/* Updates tie, player, and computer counts. */
function updateCounts() {
    const playerWinsCount = winners.filter(winner => winner === "player").length;
    const computerWinsCount = winners.filter(winner => winner === "computer").length;
    const tiesCount = winners.filter(item => item === "tie").length;

    const tiesScoreDiv = document.querySelector(".ties");
    const playerScoreDiv = document.querySelector(".playerScore");
    const computerScoreDiv = document.querySelector(".computerScore");

    tiesScoreDiv.textContent = `Ties: ${tiesCount}`;
    playerScoreDiv.textContent = `Score: ${playerWinsCount}`;
    computerScoreDiv.textContent = `Score: ${computerWinsCount}`;
}

function computerChoice() {
    // TODO: Update DOM with computer selection
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie"; 
    } else if ( 
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

/* Returns the total number of wins so far of the winning player. */
function checkWins() {
    const playerWinsCount = winners.filter(winner => winner === "player").length;
    const computerWinsCount = winners.filter(winner => winner === "computer").length;
    return Math.max(playerWinsCount, computerWinsCount);
}

function setWins() {
    let playerWinsCount = winners.filter(winner => winner === "player").length;
    let computerWinsCount = winners.filter(winner => winner === "computer").length;
    let tiesCount = winners.filter(item => item === "tie").length;
}

startGame();