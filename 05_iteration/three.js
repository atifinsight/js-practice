

// ************** 0000 ******************

// If we want to insert loop in OBJECT we will use For IN Loop
// If we want to insert loop in ARRAY we will use For OF Loop

//  Object => For IN Loop
//  Array => For OF Loop


// For of Loop

const array = [1,2,3,4,5]

for (const arr of array) {
    //console.log(arr);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    //console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()       // map is object holds unique value
map.set('IN', "India")
map.set('US', "United States of America")
map.set('PK', "Pakistan")

map.set('IN', "India")
map.set('US', "United States of America")
// console.log(map);


for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}


// Object is not iterteable using For Of Loop only maps are iterateable using For Of Loop

// const myObject = {
//     "Game1": 'NFS',
//     "Game2": "Pubg",
//     "Game3": "Spiderman"
// }

// for (const [key, value] of myObject) {
//     //console.log(key, ':-', value);
// }


/********************************************** */

// For in Loop used for Object

const object1 = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in object1) {
  // console.log(`${key} :- ${object1[key]}`);
   
}




const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(`${key} :- ${programming[key]}`);
}

// const map1 = new Map()       // map is not iterateable using For In Loop
// map1.set('IN', "India")
// map1.set('US', "United States of America")
// map1.set('PK', "Pakistan")
// map1.set('IN', "India")
// map1.set('US', "United States of America")

// for (const key in map1) {
//    //console.log(key);  // map is not iterateable using For In Loop
// }