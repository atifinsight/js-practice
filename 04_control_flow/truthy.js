const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't gave user email");
}

// Falsy values:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values:

// "0", 'false', " ", [], {}, function(){} empty function also truthy value

if (userEmail.length === 0) {
    // console.log("Array is empty");
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    // console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15

console.log(val1)

// Ternairy Operator

// condition ? true : false

const iceTeaPric = 100

iceTeaPric >= 80 ? console.log("greater than 80") : console.log("less than 80");

