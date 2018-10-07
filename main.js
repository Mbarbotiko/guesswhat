const cpuLetters = ['a', 'b', 'c'];
let guessedLetters = [];
let cpuLetterToGuess = null;
let guessesLeft = 10;
let wins = 0;
let losses = 0;





function gameReset() {
    guessedLetters = [];
    guessesLeft = 10;
    cpuRandomLetter();
    document.getElementById('guesses-left').innerHTML = '<h2>10</h2>'
}
//game reset function , clear guessed letters array, guesses left variable = 10 again, run a random letter for cpuLetters array, also set HTML to 10 because 10 never runs once user hits 0 guesses the game starts over on their first key  key up resulting in a 9 to always show.


function cpuRandomLetter() {
    cpuLetterToGuess = cpuLetters[Math.floor(Math.random() * cpuLetters.length)]
}
//using math random to assign a random letter from the cpuLetters array to the computers guess


cpuRandomLetter();



document.onkeyup = function (event) {
    var userChoice = String.fromCharCode(event.which).toLowerCase();
    guessedLetters.push(userChoice)


    //write a condition / evaluation of the users choice if they choose anything besides what is in the CPU letters array tell them to choose a letter

    // maybe use index of instead, otherwise else will run the length of the alphabet -1 printing and reprinting HTML to the page or modal when later introduced

    var i;
for (i = 0; i < cpuLetters.length; i++) {
    if (userChoice==cpuLetters[i]){
    console.log('we have a match');

    }else{
        console.log('not a match')
        
    }
    
}

    



    document.getElementById('wins').innerHTML = '<h2>' + wins + '</h2>'
    document.getElementById('losses').innerHTML = '<h2>' + losses + '</h2>'
    document.getElementById('guesses-left').innerHTML = '<h2>' + guessesLeft + '</h2>'
    document.getElementById('guesses-made').innerHTML = '<h2>' + guessedLetters + '</h2>'

    if (userChoice === cpuLetterToGuess) {
        wins++;
        gameReset();
    }

    if (guessesLeft === 0) {
        losses++;
        gameReset();
    }

    guessesLeft--

};





