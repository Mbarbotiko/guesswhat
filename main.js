const cpuLetters = ['a', 'b'];
let guessedLetters = [];
let cpuLetterToGuess = null;
let guessesLeft = 10;
let wins = 0;
let losses = 0;

function gameReset() {
    guessedLetters = [];
    guessesLeft = 10;
    cpuRandomLetter();
}

function cpuRandomLetter() {
    cpuLetterToGuess = cpuLetters[Math.floor(Math.random() * cpuLetters.length)] // can just move this into the game function and now need to reset it in gamereset
}

cpuRandomLetter();
//using math random to assign a random letter from the cpuLetters array to the computers guess

document.onkeyup = function (event) {
    var userChoice = String.fromCharCode(event.which).toLowerCase();
    guessedLetters.push(userChoice);




    console.log(cpuLetterToGuess);
    //write a condition / evaluation of the users choice if they choose anything besides what is in the CPU letters array tell them to choose a letter




    if (userChoice===cpuLetterToGuess){
        wins++;
        gameReset();
    }
    
    if (guessesLeft === 0){
        losses++;
        gameReset();
    }

    guessesLeft--

    document.getElementById('wins').innerHTML = '<h2>' + wins + '</h2>'
    document.getElementById('losses').innerHTML = '<h2>' + losses + '</h2>'
    document.getElementById('guesses-left').innerHTML = '<h2>' + guessesLeft + '</h2>'
    document.getElementById('guesses-made').innerHTML = '<h2>' + guessedLetters + '</h2>'
    //will need to use a loop to print all the letters
    
};





