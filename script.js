const choices = ["rock", "paper", "scissors"];
// const winners = [];
let numTies = 0;
let numPlayerWins = 0;
let numComputerWins = 0;
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
    let numWins = checkWins();
    if (numWins >= NUM_ROUNDS) {
        return;
    }
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    // winners.push(winner);
    updateCounts();
    displayRound(playerSelection, computerSelection, winner);
    numWins = checkWins(); 
    if (numWins === NUM_ROUNDS) {
        displayEnd(); 
    }
}

/* Displays the end results, including the play again button and
the winner of the game. */
function displayEnd() {
    const winnerEle = document.querySelector(".winner");
    winnerEle.textContent = numPlayerWins === NUM_ROUNDS ? 
                            "Congratulations, you won the game!" :
                            "Sorry, the computer won the game.";
}

/* Displays what the player chose, computer chose, and who won
the round. */
function displayRound(playerSelection, computerSelection, winner) {
    playerSelection = capitalizeWord(playerSelection);
    computerSelection = capitalizeWord(computerSelection);
    winner = capitalizeWord(winner);

    const winnerEle = document.querySelector(".winner");
    const playerChoiceEle = document.querySelector(".playerChoice");
    const computerChoiceEle = document.querySelector(".computerChoice");

    winnerEle.textContent = winner === "Tie" ? "It was a tie!" : `The winner of this round is: ${winner}`;
    playerChoiceEle.textContent = `You chose: ${playerSelection}`;
    computerChoiceEle.textContent = `The computer chose: ${computerSelection}`;
}

/* Capitalizes a non-empty string <s>. */
function capitalizeWord(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/* Updates tie, player, and computer counts. */
function updateCounts() {
    // Grab references to DOM nodes
    const tiesScoreEle = document.querySelector(".ties");
    const playerScoreEle = document.querySelector(".playerScore");
    const computerScoreEle = document.querySelector(".computerScore");

    // Update text content
    tiesScoreEle.textContent = `Ties: ${numTies}`;
    playerScoreEle.textContent = `Score: ${numPlayerWins}`;
    computerScoreEle.textContent = `Score: ${numComputerWins}`;
}

function computerChoice() {
    // TODO: Update DOM with computer selection
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
}

/* Returns the winnner of this round. */
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        numTies++;
        return "tie"; 
    } else if ( 
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        numPlayerWins++;
        return "player";
    } else {
        numComputerWins++;
        return "computer";
    }
}

/* Returns the total number of wins so far of the winning player. */
function checkWins() {
    return Math.max(numPlayerWins, numComputerWins);
}

startGame();