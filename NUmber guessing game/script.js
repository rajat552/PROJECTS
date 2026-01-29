let randomNumber = (Math.random()*100 +1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlots = document.querySelector('.guesses'); 
const reamining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid Number');
    }else if(guess < 1){
        alert('please enter Number from 1 to 100');
    }else if(guess > 100){
        alert('please enter Number from 1 to 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`);
        endGame;
    }else if(guess < randomNumber){
        displayMessage(`Number is TOOO Low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is TOOO High`);
    }
}
function displayGuess(guess){
    userInput.value = '';
    guessSlots.innerHTML += `  ${guess},`;
    numGuess++;
    reamining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start a NewGame</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = (Math.random()*100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlots.innerHTML = '';
        reamining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;


    })
}
