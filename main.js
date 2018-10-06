const cpuLetters = ['a', 'b'];
let guessedLetters = [];
let cpuLetterToGuess = null;
let guessesLeft = 10;
let wins = 0;
let losses = 0;

function gameReset() {
    guessedLetters = [];
    cpuRandomLetter();
    guessesLeft = 10;
    wins = 0;
    losses = 0;


}
function cpuRandomLetter() {
    cpuLetterToGuess = cpuLetters[Math.floor(Math.random() * cpuLetters.length)]
}
//using math random to assign a random letter from the cpuLetters array to the computers guess














document.getElementById('wins').innerHTML = '<h2>' + wins + '</h2>'
document.getElementById('losses').innerHTML = '<h2>' + losses + '</h2>'
document.getElementById('guesses-left').innerHTML = '<h2>' + guessesLeft + '</h2>'
document.getElementById('guesses-made').innerHTML = '<h2>' + guessedLetters + '</h2>'
//will need to use a loop to print all the letters


