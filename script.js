/* Randomly returns the string 'Rock', 
'Paper', or 'Scissors'. */
function computerPlay() {
    const num = Math.floor(Math.random() * 3);
    return (num === 0) ? 'Rock' :
    (num === 1) ? 'Paper' :
    'Scissors';
}