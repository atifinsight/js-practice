// array

const myArr = [0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1,2,3,4) 

// console.log(myArr[0],myArr[4]);
// console.log(myArr2.length)

// array methods

// myArr.push(6) // add 6 at end
// myArr.push(7)
// myArr.pop()  // pop last value

// myArr.unshift(9) // push 9 at start

// myArr.shift() // pop first value
// console.log(myArr.includes(2)) //check if 2 exist or not give boolean result true or flase.
// console.log(myArr.indexOf(2))   // if found give location if not give -1

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);    // change type to string


//*************     slice, spice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)   // it prints the value from pos 1 to pos 3 and pos 3 not included

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)  // it will skip or eat that values from pos 1 to pos 3 in orignals array and display remaining values.
console.log("C ", myArr)
console.log(myn2)







