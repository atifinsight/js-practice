const typedText = document.querySelector('.typed-text')
const cursor = document.querySelector('.cursor')

const wordList = ['Love', 'Amazing', 'Cool', 'Weird', 'Fun']

let currentWordIndex = 0
let currentCharIndex = 0

function type(){
    const currentWord = wordList[currentWordIndex]
    if (currentCharIndex < currentWord.length) {
        typedText.innerHTML += currentWord[currentCharIndex]
        currentCharIndex++
        cursor.style.display = 'inline-block'
        setTimeout(type, 200)
    } else{
        cursor.style.display = 'none'
        setTimeout(erase, 1000)
    }
}

function erase(){
    const currentWord = wordList[currentWordIndex]
    if (currentCharIndex > 0) {
        typedText.innerHTML = currentWord.substring(0, currentCharIndex - 1)
        currentCharIndex--
        cursor.style.display = 'inline-block'
        setTimeout(erase, 100)
    } else{
        currentWordIndex = (currentWordIndex + 1) % wordList.length
        setTimeout(type, 500)
    }
}

type()