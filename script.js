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

function playRound(playerSelection) {
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
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

function setWins() {
    let playerWinsCount = winners.filter(winner => winner === "player").length;
    let computerWinsCount = winners.filter(winner => winner === "computer").length;
    let tiesCount = winners.filter(item => item === "tie").length;
}

startGame();