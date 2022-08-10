const choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

/* Randomly returns the string 'rock', 'paper', or 'scissors'. */
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
}

function validateUserInput(choice) {
    return choices.includes(choice);
}

/* Returns a string declaring the winner of this round. */
// function displayMessage(playerSelection, computerSelection) {
//     // Make it case-insensitive
//     playerSelection = playerSelection.toLowerCase();

//     if (playerSelection === 'rock') {
//         return (computerSelection === 'rock') ? 'Tie!' :
//         (computerSelection === 'paper') ? 'You Lose! Paper beats Rock' :
//         'You Win! Rock beats Scissors';
//     } else if (playerSelection === 'paper') {
//         return (computerSelection === 'rock') ? 'You Win! Paper beats Rock' :
//         (computerSelection === 'paper') ? 'Tie!' :
//         'You Lose! Scissors beats Paper';
//     } else if (playerSelection === 'scissors') {
//         return (computerSelection === 'rock') ? 'You Lose! Rock beats Scissors' :
//         (computerSelection === 'paper') ? 'You Win! Scissors beats Paper' :
//         'Tie!';
//     } else {
//         return 'Invalid input';
//     }
// }

/* Plays a five round game of Rock paper scissors keeping score 
and returning the winner/loser at the end. */
// function game() {
//     const NUM_ROUNDS = 5; 
//     let score = 0;

//     // Create 3 button elements 
//     const btn1 = document.createElement('button'); 
//     const btn2 = document.createElement('button');
//     const btn3 = document.createElement('button');

//     const msgDiv = document.createElement('div');
//     const scoreDiv = document.createElement('div');
//     const announceDiv = document.createElement('div'); 

//     const buttons = [btn1, btn2, btn3];

//     // Update text
//     btn1.textContent = 'Rock'; 
//     btn2.textContent = 'Paper';
//     btn3.textContent = 'Scissors';
//     msgDiv.textContent = 'Message: The first player with 5 points wins the game'; 
//     scoreDiv.textContent = `Running score: ${score}`; 
//     announceDiv.style.cssText = 'color: rebeccapurple; font-weight: 700; font-size: 2em;'; 

//     buttons.forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             const playerSelection = e.target.textContent;
//             const computerSelection = computerPlay(); 
//             score += playRound(playerSelection, computerSelection);
//             msgDiv.textContent = 'Message: ' + displayMessage(playerSelection, computerSelection);
//             scoreDiv.textContent = `Running score: ${score}`; 
//             announceDiv.textContent = ''; 
//             if (Math.abs(score) === NUM_ROUNDS) { // check for winner
//                 announceDiv.textContent = score > 0 ? "You win!" : "You lose!";
//                 score = 0;
//             }
//         });
//     })

//     // Add them to the DOM
//     document.body.appendChild(btn1);
//     document.body.appendChild(btn2);
//     document.body.appendChild(btn3);
//     document.body.appendChild(msgDiv);
//     document.body.appendChild(scoreDiv);
//     document.body.appendChild(announceDiv);
// }

game();