let randomNumber = parseInt(Math.random() * 100 + 1)   // 1-100 random number

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}



// This function guess if the values is between 1-100
function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number greater than 0')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}




// This function check if the guess value is equal to the random numner or not, if yes then use displayMessage() and tell him you won, if numebr less then tell him low number if number is high tell him number is high
function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`Number is too low!`)
    }
    else if(guess > randomNumber) {
        displayMessage(`Number is too high!`)
    }
}





// This function clean the values, previous guess update, remaining guess update
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}; `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}` 
}




// In This function we pass the message from hiOrLow value and print it.
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}




function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}