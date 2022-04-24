/* Randomly returns the string 'Rock', 'Paper', or 'Scissors'. */
function computerPlay() {
    const num = Math.floor(Math.random() * 3);
    return (num === 0) ? 'Rock' :
    (num === 1) ? 'Paper' :
    'Scissors';
}

/* Returns a string declaring the winner of this round. */
function playRound(playerSelection, computerSelection) {
    // Make it case-insensitive
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'Rock') {
            // TODO: Tie
        } else if (computerSelection === 'Paper') {
            return 'You Lose! Paper beats Rock';
        } else { // Scissors
            return 'You Win! Rock beats Scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'Rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSelection === 'Paper') {
            // TODO: Tie
        } else { // Scissors
            return 'You Lose! Scissors beats Paper';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {
            return 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'Paper') {
            return 'You Win! Scissors beats Paper';
        } else { // Scissors
            // TODO: Tie
        }
    } else {
        // TODO: Handle invalid user input
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));