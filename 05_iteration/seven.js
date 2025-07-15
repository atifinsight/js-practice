const myNums = [1,2,3,4,5,6,7,8,9,10]

// map() automatically return value
// const newNums = myNums.map( (num) => {
//     return num + 10
// } )


// If we want to do chaning then we can apply multiple function like map(), fitler() like below example

const newNums = myNums
                    .map( (num) => num * 10 ) // it returns the vales
                    .map( (num) => num + 1 ) // in this map() because this chaining so it gets the value from previous map()
                    .filter( (num) => num >= 40 )   // We apply conditions in filter() method.
console.log(newNums);
