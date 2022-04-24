/* Randomly returns the string 'rock', 'paper', or 'scissors'. */
function computerPlay() {
    const num = Math.floor(Math.random() * 3);
    return (num === 0) ? 'rock' :
    (num === 1) ? 'paper' :
    'scissors';
}

/* Returns a string declaring the winner of this round. */
function playRound(playerSelection, computerSelection) {
    // Make it case-insensitive
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        return (computerSelection === 'rock') ? 'Tie!' :
        (computerSelection === 'paper') ? 'You Lose! Paper beats Rock' :
        'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper') {
        return (computerSelection === 'rock') ? 'You Win! Paper beats Rock' :
        (computerSelection === 'paper') ? 'Tie!' :
        'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors') {
        return (computerSelection === 'rock') ? 'You Lose! Rock beats Scissors' :
        (computerSelection === 'paper') ? 'You Win! Scissors beats Paper' :
        'Tie!';
    } else {
        return 'Invalid input';
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));