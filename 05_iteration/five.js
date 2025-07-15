// Join method.
//1. Write a function to reverse a word.

// let str = "Atif"

// let spilltedStr = str.split("").reverse().join("");
// console.log(spilltedStr);

//*****************************************





//2. Write a function to reverse a string.
// let str = "I am atif"

// let splitStr = str.split(" ").reverse().join(" ")
// console.log(splitStr);



//************************************** */

//3.  Write a function to reverse a whole string words.
// let str = "I am atif"

// let splitStr = str.split("").reverse().join("")
// console.log(splitStr);


//************************************** */

//4. CHeck if a string is palindrom or not.

// let str = "popamdn"

// function checkPalindrome(){
//     let opp = str.split("").reverse().join("")
//     if (opp==str) {
//         console.log("String is palindrome");
//     } else{
//         console.log("String is not palindrome");
//     }
// }
// checkPalindrome()


//************************************** */
//5. Take two array and compare the values of array

// let arr1 = [100,200,300,400]
// let arr2 = [100,200,300,400]


// We can't compare them like this
// console.log(arr1 == arr2);  // false
// console.log(arr1 === arr2); // false

// We have to compare like this using JSON stringify
// let isEqual = JSON.stringify(arr1) === JSON.stringify(arr2)
// console.log(isEqual);


// 2nd method

// function arraysEqual(val1, val2){
//     if (val1.length !== val2.length) {
//         return false
//     }
//     for (let i = 0; i < val1.length; i++) {
//         if (val1[i] !== val2[i]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(arraysEqual(arr1,arr2));


//************************************** */
//6. Difference between null and undefined

// It gives true because we used == which is loose equality, it tries to convert and compare the values and not check the data type of values.
// console.log(null == undefined);    //true


// It gives fasle because we used === which is strict equality, it check the data type of values as well.

// As we know null is and object type and undefined has undefined type.
// console.log(null === undefined);    //fasle

// let a;  // undefined value.
// console.log(a)

//************************************** */

// 7. how you will assign a new array with the size of 10


// let arr = new Array(10)

// console.log(arr.length);
// console.log(arr);


// Arrow Function Syntax:
//1. Concise body (no braces) — returns the expression automatically
//2.Block body (with braces) — you must use return explicitly

//1.
// let arr1 = Array.from({length: 10}, (element,index) => index)
// console.log(arr1);
//2.
// let arr2 = Array.from({length: 20}, (element,index) => {return index})
// console.log(arr2);

//************************************** */

//8. How you check the datatype of a variable

// let var1  = "Atif"
// let var2 = 103
// let var3;
// console.log(typeof var1);
// console.log(typeof var2);
// console.log(typeof var3);

// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof undefined);

//************************************** */
// 9.  Difference between primitive and non-primitive data types


//Stack (primitve) => copy of value, 
//Heap (non-primitive) => reference of orignal value


//************************************** */

// 10. Object Freeze?

//Object.freeze() is a method in JavaScript used to make an object immutable — meaning:
//The object is frozen and cannot be changed.
//You cannot add, delete, or modify its properties.


//************************************** */

// 11. Promsie Chaning and Promise

//Promise = handles one async result.
//One .then() or .catch()
//Handle one future value

//Promise chaining = handles a sequence of results, where each depends on the previous.
//Multiple .then() calls linked together
//Pass results from one async step to another


//************************************** */

// 12. Write a function taking 2 strings and alternatively merge the string like str1="atif" and str2="khan", you have to merge liek a with k, and t with h like so on.

// let str1 = "atif"
// let str2 = "khanzada"
// let str3 = ""
// function mergeString(){
//     for (let i = 0; i < str1.length+str2.length; i++) {
//         if (i<str1.length) {
//             str3 = str3+str1[i]
//         }
//         if (i<str2.length) {
//             str3 = str3+str2[i]
//         }
//     }
// }

// mergeString()
// console.log(str3);

//************************************** */

//13. let arr = [,,,] tell the array length

//If you keep the element empty at the last, it won't be considered in length
// let arr = [,,,] 

// console.log(arr.length);    //3
// arr.fill(0)
// console.log(arr);

//************************************** */

//14. Map and forEach difference


/*
Use map() if:
You need a new array
You're transforming values

Use forEach() if:
You just want to do something with each item (e.g., console log, save to DB)
You don’t care about returning a new array
*/

// const names = ["Ali", "Sara", "John"];

// map - create array of name lengths
// const lengths = names.map(name => name.length); 
// console.log(lengths); 
// forEach - print each name
// names.forEach(name => console.log("Hello " + name));

//************************************** */

//15. Check the output // 100 because objects are non-primitive datatype so the value is stored as the reference of that value it means orignal value also be changed and making changing.

// const a = {
//     age: 20
// }
// b = a   // copying to the reference
// b.age = 100
// console.log(a.age);

// Without copying the reference copy the values

// let newObj = {...a}     // First spread the values of object a
// newObj.age = 50
// console.log(newObj.age);






//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// HTML Questions

//************************************** */
// 16. EM Tag(indicate importance) and I Tag(italic)

//<p>This is <em>very</em> important!</p>
//<p>The Latin word is <i>lorem</i>.</p>


//************************************** */
// 17. diff b/w strong(Sementic importance) and bold tag(Just bold)

//<p><strong>Warning:</strong> This action cannot be undone.</p>
//<p>Try our new <b>Pro Max Edition</b> of the phone!</p>

//************************************** */
// 18. progress tag and meter tag diff?

/*
<progress>:
Show task progress	, value, max

Uploading file...
<progress value="45" max="100"></progress>


<meter>:
Show measurement in a range, value, min, max, low, high, optimum

CPU Usage:
<meter value="65" min="0" max="100" low="40" high="80" optimum="50"></meter>

*/

//************************************** */


// 19. Types of lists in html

/*

| Ordered List     | `<ol>` | Steps, sequences, rankings   | Numbered |
| Unordered List   | `<ul>` | Groups, categories, no order | Bulleted |
| Description List | `<dl>` | Terms and their definitions  | Indented |

*/

//************************************** */
//************************************** */
//************************************** */


// 20. 

// console.log("1"-1);

// setTimeout(() => {
//     console.log(10);
// }, 10);
// console.log(2);

// setTimeout(() => {
//     console.log(12);
// }, 10);
// setTimeout(() => {
//     console.log(11);
// }, 9);

// Find out first repeated character from string using function


//************************************** */

// 21. Find first repeated character

// const str = "Heena"

// function repeatedCharacter(){
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i+1; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 return str[i]
//             }
//         }
//     }
//     return null
//      // if no repeated character
// }
// console.log(repeatedCharacter(str));

//************************************** */

// 22. Separate characters in 1 array and number in different array using function

// const arr = ["a","b",18,"d",100,10]


// By using For OF loop

// function separateCharsAndNumbers(arr){
//     let charArr = []
//     let numArr = []

//     for (let item of arr) {
//         if (typeof item === "string") {
//             charArr.push(item)
//         } else if (typeof item === "number") {
//             numArr.push(item)
//         }
//     }
//     return {charArr, numArr}
// }

// const result = separateCharsAndNumbers(arr)
// console.log(`Characters are : ${result.charArr}`);
// console.log(`Numbers are : ${result.numArr}`);

// By using For Loop
function separateCharsAndNumbers(arr) {
  const chars = [];
  const nums = [];

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "string") {
      chars.push(arr[i]);
    } else if (typeof arr[i] === "number") {
      nums.push(arr1[i]);
    }
  }

  console.log("Characters are:", chars);
  console.log("Numbers are:", nums);
}

const arr1 = ["a", "b", 18, "d", 100, 10];
separateCharsAndNumbers(arr1);








