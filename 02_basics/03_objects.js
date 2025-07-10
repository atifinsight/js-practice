// singleton        if we make object with constructor
// Object.create

// object literals      // objects have keys and values

const mySym = Symbol("key1")

const JsUser = {
    name: "Atif",
    "full name": "Muhamamd Atif",
    [mySym]: "mykey1",
    age: 24,
    location: "Lahore",
    email: "atif@google.com",
    isLoggedIn: false,
    lastLoginDats: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym])

JsUser.email = "atif@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "atif@yahoo.com"

// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)  // If we want to refer same object we use keyword 'this' then access properties of that object
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
