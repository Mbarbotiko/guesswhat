const cpuLetters = ['a', 'b'];
let guessedLetters = [];
let cpuLetterToGuess = null;
const guessesLeft = 10;
let wins = 0;
let losses = 0;













document.getElementById('wins').innerHTML = '<h2>' + wins +  '</h2>'


document.getElementById('losses').innerHTML='<h2>'+losses+'</h2>'
document.getElementById('guesses-left').innerHTML='<h2>'+guessesLeft+'</h2>'
document.getElementById('guesses-made').innerHTML='<h2>'+guessedLetters+'</h2>'
//will need to use a loop to print all the letters


