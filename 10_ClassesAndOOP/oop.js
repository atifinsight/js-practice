/* 
Javascript and classes:

Javascript is a prototype-based language not object nor functional based. JS does not use classes.

1. OOP


2. Object:
- Collection of properties and methods.
- toLowerCase()
- Promise()

3. Why use OOP



4. Parts of OOP
- Object literal

- Constructor function
- Prototypes
- Classes
- Instances/new/this


5. 4 Pillars:-

- Abstraction:
It hide complex implementation details, i.e fetch() it hides details we don't know behind the scene details, it hides internal details so we don't need to worry about its behind logic.

- Encapsulation:
Wrap the data(variables) and methods(functions) into a single unit, usually a class, It hides internal details and exposes only what is necessary. private and public scope.

- Inheritance:
Inheritance allows a class (child) to inherit properties and methods from another class (parent), promoting code reusability.

- Polymorphism
Polymorphism means "many forms"—the same method behaves differently depending on the object calling it.


Summary:

Pillar        | What It Does         | Real-World Analogy 

Encapsulation | Hides internal state | Remote hides 
                                       TV circuits  

Abstraction  | Shows only what’s necessary | Car dashboard hides engine    

Inheritance   | Reuses behavior from parent classes | Child inherits traits from parent

Polymorphism  | Many forms of a method  | Pressing "play" on TV vs. music


*/



// *******************************

// 1. Object Literal

// const user = {
//     username: "Atif",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);   
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



// 2. Constructor Function

// 'new' keyword are used to make new context

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this
}

// 'new' keyword create a empty object, called instance.
 

const userOne = new User("Atif",12,true)
const userTwo = new User("Imran",10,false)
console.log(userOne);
console.log(userTwo);

