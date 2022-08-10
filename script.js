const choices = ["rock", "paper", "scissors"];
const winners = [];
const NUM_ROUNDS = 5;

function game() {
    for (let i = 0; i < NUM_ROUNDS; i++) {
        playRound();
    }
    reportWins();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
}

function computerChoice() {
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
}

function playerChoice() {
    let userInput = prompt("Enter rock, paper, or scissors: ");
    while (userInput === null) {
        userInput = prompt("Enter rock, paper, or scissors: ");
    }
    userInput = userInput.toLowerCase();
    while (!validateUserInput(userInput)) {
        userInput = prompt("Enter rock, paper, or scissors. Spelling needs to be exact, but capitalization doesn't matter.");
        userInput = userInput.toLowerCase();
    }
    return userInput;
}

function validateUserInput(choice) {
    return choices.includes(choice);
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

function reportWins() {
    let playerWinsCount = winners.filter(winner => winner === "player").length;
    let computerWinsCount = winners.filter(winner => winner === "computer").length;
    let tiesCount = winners.filter(item => item === "tie").length;
    console.log("Player wins: ", playerWinsCount);
    console.log("Computer wins: ", computerWinsCount);
    console.log("Ties: ", tiesCount);
}

game();