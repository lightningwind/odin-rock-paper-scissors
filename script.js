// Initialize global variables
const choices = ["rock", "paper", "scissors"];
let numTies = 0;
let numPlayerWins = 0;
let numComputerWins = 0;
const NUM_ROUNDS = 5;

// Grab references to our DOM elements
const winnerEle = document.querySelector("h1.winner");
const playAgainBtn = document.querySelector(".winnerDiv > button");
const playerChoiceEle = document.querySelector(".playerChoice");
const computerChoiceEle = document.querySelector(".computerChoice");
const tiesScoreEle = document.querySelector(".ties");
const playerScoreEle = document.querySelector(".playerScore");
const computerScoreEle = document.querySelector(".computerScore");
const playerButtons = document.querySelectorAll("div.playerBtns > button");

/* Resets the game to its original state. */
function resetGame() {
    numTies = 0;
    numPlayerWins = 0;
    numComputerWins = 0;

    updateScores();

    winnerEle.textContent = "";
    playAgainBtn.classList.toggle("reset");
    playerChoiceEle.textContent = "";
    computerChoiceEle.textContent = "";

    playerButtons.forEach(btn => {
        btn.disabled = false; 
    })
}

/* Starts the RPS game by attaching event listeners to
the user's buttons. */
function startGame() {
    playerButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            playRound(btn.className);
        })
    })
}

/* Plays one round of RPS. */
function playRound(playerSelection) {
    const computerSelection = computerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    updateScores();
    displayRoundResults(playerSelection, computerSelection, winner);
    if (isGameOver()) {
        displayEnd(); 
    }
}

/* Returns true iff a player has reached NUM_ROUNDS wins. */
function isGameOver() {
    const numWins = checkWins();
    return numWins >= NUM_ROUNDS; 
}

/* Displays the end results, including the play again button and
the winner of the game. */
function displayEnd() {
    if (numPlayerWins === NUM_ROUNDS) {
        winnerEle.textContent = "Congratulations, you won the game!";
    } else {
        winnerEle.textContent = "Sorry, the computer won the game.";
    }

    playAgainBtn.classList.toggle("reset"); 
    playerButtons.forEach(btn => {
        btn.disabled = true;
    })
}

/* Displays what the player and computer have chosen, and who won
the round. */
function displayRoundResults(playerSelection, computerSelection, winner) {
    playerSelection = capitalizeWord(playerSelection);
    computerSelection = capitalizeWord(computerSelection);
    winner = capitalizeWord(winner);

    winnerEle.textContent = winner === "Tie" ? "It was a tie!" : `The winner of this round is: ${winner}`;
    playerChoiceEle.textContent = `You chose: ${playerSelection}`;
    computerChoiceEle.textContent = `The computer chose: ${computerSelection}`;
}

/* Capitalizes a non-empty string <s>. */
function capitalizeWord(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/* Updates the DOM with tie, player, and computer scores. */
function updateScores() {
    tiesScoreEle.textContent = `Ties: ${numTies}`;
    playerScoreEle.textContent = `Score: ${numPlayerWins}`;
    computerScoreEle.textContent = `Score: ${numComputerWins}`;
}

/* Returns a randomly selected choice from array <choices>. */
function computerChoice() {
    const idx = Math.floor(Math.random() * choices.length);
    const choice = choices[idx];

    const btn = document.querySelector(`.computerBtns > button.${choice}`);
    
    btn.disabled = false;
    setTimeout(() => {
        btn.disabled = true;
    }, 700);

    return choice;
}

/* Returns the winnner of this round. */
function getWinner(playerSelection, computerSelection) {
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