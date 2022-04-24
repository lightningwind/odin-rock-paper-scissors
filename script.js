/* Randomly returns the string 'rock', 'paper', or 'scissors'. */
function computerPlay() {
    const num = Math.floor(Math.random() * 3);
    return (num === 0) ? 'rock' :
    (num === 1) ? 'paper' :
    'scissors';
}

/* Returns a string declaring the winner of this round. */
function displayMessage(playerSelection, computerSelection) {
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

/* Either returns the value 0 if there was a tie, 
1 if the player won, or -1 if the computer won. */
function playRound(playerSelection, computerSelection) {
    // Make it case-insensitive
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        return (computerSelection === 'rock') ? 0 :
        (computerSelection === 'paper') ? -1 : 1;
    } else if (playerSelection === 'paper') {
        return (computerSelection === 'rock') ? 1 :
        (computerSelection === 'paper') ? 0 : -1;
    } else if (playerSelection === 'scissors') {
        return (computerSelection === 'rock') ? -1 :
        (computerSelection === 'paper') ? 1 : 0;
    } else {
        return 0;
    }
}

/* Plays a five round game of Rock paper scissors keeping score 
and returning the winner/loser at the end. */
function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) { // Play five rounds
        const playerSelection = prompt('Rock, paper, or scissors?');
        const computerSelection = computerPlay();
        score += playRound(playerSelection, computerSelection);
        console.log(displayMessage(playerSelection, computerSelection));
    }
    return (score === 0) ? 'It was a tie!' :
    (score > 0) ? 'You win!' :
    'You lose!'; 
}

console.log(game());