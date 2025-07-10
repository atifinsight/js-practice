// console.log("2" > 1)

// console.log("02" > 1)


// console.log(null == 0)

// Comparision converts null to a number, treating it as 0.
// console.log(null < 0)
// console.log(null > 0)
// console.log(null <= 0)
// console.log(null >= 0)


// all false value
// console.log(undefined == 0)
// console.log(undefined < 0)
// console.log(undefined > 0)
// console.log(undefined <= 0)
// console.log(undefined >= 0)

// === Strict Check datatype and value both

// console.log("2" === 2);


// ***********************


// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// both have hold different values because symbol make them unique
const id = Symbol('123')
const id2 = Symbol('123')

// console.log(id === id2)



// Reference (Non Premitive) their datatype is object

// Array, Objects, Functions

//Array
const heros = ["Iron Man", "Thor", "Hulk"]

//Objects
let myObj = {
    name: "Atif",
    age: 22,
}

//function
const myFunction = function () {
    console.log("Hello World");
}

// console.log(typeof myFunction);



// ******************************************

//Stack (primitve) => copy of value , Heap (non-primitive) => reference of orignal value


