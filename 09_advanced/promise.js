/*
Promise:
The Promise object represents the eventual(Lazmi) completion (or failure) of an asynchronous operation and its resulting value.

OR

A Promise in JavaScript is like a guarantee that something will finish later — either successfully or with an error — and you'll get the result when it's done.

It complete in future either success or failure.

*/

// Promise -> Object

// const promiseOne =  new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network call
//     setTimeout(function(){
//         console.log("Async task 1 is complete");
//         resolve()   // resolve() is method it has connection with .then() direct we have to call it here.
//     }, 1000)
// })

// // .then() has direct connection of parameter in function 'resolve'

// promiseOne.then(function(){
//     console.log(("Promise 1 consumed")); 
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Promise 2 consumed");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             username: "Atif",
//             email: "atif@gmail.com"
//         })
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
//     console.log(user.username);
//     console.log(user.email);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({
//                 username: "Imran",
//                 password: "123"
//             })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// Promise chaining: .then().then().catch(), the result of first then pass to next then and so on...
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((myUsername) => {
//     console.log(myUsername);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => {
//     console.log("The promise is either resolved or rejected");
// })


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({
//                 username: "Javascript",
//                 password: "123"
//             })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// Let's try another method other than .then().catch() which is async await, we can use both method according to our need.

// async await can not directly handle the errors.

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive   // as we know Promise is an object we consume it like this promiseFive by their name, not calling the method like promiseFive(). 
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// By using async await method we fetch the api data

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')  // the data is in string by default
//         const data = await response.json()     // .json() convert it into json, as json() also take some time to fetch so we have to add await.
//         console.log(data);
//     } catch (error) {
//         console.log("E ", error); 
//     }
// }
// getAllUsers()



// Now by using .then().catch() method we fetch the api data

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/atifinsight')
.then((response) => {
    return response.json()
})  // first run this then()
.then((data) => {
    console.log(data);
})  // then run this then()
.catch((error) => {
    console.log(error);
})  // if error then run this catch()


// fetch():
// It execute first even from setTimeout because it has special priorit queue which runs first then task queue.

// if we get some response from the networks request it goes to the resolve() method or onFulfilled[] method, even the error like 404 error also goes to resolve() method because it go through the network request then we know it gives error, Only in the case of rejection() method or onRejection[] execute when the the request can't go or stuck and no response come.

// response = fetch()
//1. Web browser/node -> network request -> true or false
//2. Data:___ -> onFulfilled[fn] or onRejection[fn]

// true -> onFulfilled[fn]
// false -> onRejection[fn]

// onFulfilled[fn] or onRejection[fn] are responsible to fulfil the Data:____, and Data:___ is responsible to fulfil the variable response.