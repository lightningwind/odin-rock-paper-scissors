const choices = ["rock", "paper", "scissors"];
const winners = [];
const NUM_ROUNDS = 5;

/* TODO: Resets the game */
function resetGame() {

}

/* Starts the RPS game by attaching event listeners to
the player's buttons. */
function startGame() {
    const queryStr = ".playerBtns > button";
    const playerButtons = document.querySelectorAll(queryStr);
    playerButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            playRound(btn.className);
        })
    })
}

/* Plays one round of RPS if the game is not already over. */
function playRound(playerSelection) {
    const numWins = checkWins();
    if (numWins >= NUM_ROUNDS) {
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
    // Capitalize each word
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    winner = winner.charAt(0).toUpperCase() + winner.slice(1);

    const winnerEle = document.querySelector(".winner");
    const playerChoiceEle = document.querySelector(".playerChoice");
    const computerChoiceEle = document.querySelector(".computerChoice");

    winnerEle.textContent = winner === "Tie" ? "It was a tie!" : `The winner is: ${winner}`;
    playerChoiceEle.textContent = `You chose: ${playerSelection}`;
    computerChoiceEle.textContent = `The computer chose: ${computerSelection}`;
}

/* Updates tie, player, and computer counts. */
function updateCounts() {
    // Compute each count
    const playerWinsCount = winners.filter(winner => winner === "player").length;
    const computerWinsCount = winners.filter(winner => winner === "computer").length;
    const tiesCount = winners.filter(item => item === "tie").length;

    // Grab references to DOM nodes
    const tiesScoreEle = document.querySelector(".ties");
    const playerScoreEle = document.querySelector(".playerScore");
    const computerScoreEle = document.querySelector(".computerScore");

    // Update text content
    tiesScoreEle.textContent = `Ties: ${tiesCount}`;
    playerScoreEle.textContent = `Score: ${playerWinsCount}`;
    computerScoreEle.textContent = `Score: ${computerWinsCount}`;
}

function computerChoice() {
    // TODO: Update DOM with computer selection
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
}

/* Returns the winnner of this round. */
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

startGame();