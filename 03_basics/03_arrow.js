const user = {
    username: "atif",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); 
        // If refer current context(values) use keyword 'this',
        // 'this' only used in object not in fucntions
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);      // if no context on global it gives empty object in node differ in browser(windows object)

// function chai(){
//     let username = "atif"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "atif"
//     console.log(this.username);
// }

const chai = () => {
    let username = "atif"
    console.log(this);
}

// chai()


// Explicit return , when we use return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit return , no need to write return keyword just use simple of paranthesis
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "atif"})

console.log(addTwo(4,6))

// const myArray = [2,5,7,4,3]

// myArray.forEach()