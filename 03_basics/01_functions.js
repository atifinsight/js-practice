function sayMyName(){
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("F");
}

// sayMyName()      // sayMyName => reference   sayMyName() => execute

// function addTwoNumbers(number1, number2){   //(n,m) => Parameters
//     console.log(number1 + number2);  
// }

function addTwoNumbers(number1, number2){   //(n,m) => Parameters
    
    // let result = number1 + number2
    // console.log("Atif");
    // return result

    return number1 + number2
}

const result = addTwoNumbers(1, 2)      // (1,2) => Arguments

// console.log("Result: ", result);


function loginUserMessage(username = "Sam"){
    if (!username) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Atif"))


function calculateCartPrice(...num1){       // ... => called rest(all item shows in pack bundle in array) operator also called spread(spread all array values) operator 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice1(val1, val2, ...num2){
    return num2
}

// console.log(calculateCartPrice1(200, 400, 500))

const user = {
    username: "Atif",
    price: 199
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 400]));
