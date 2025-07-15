// const coding = ["js", "css", "html", "android", "ruby", "java", "python", "cpp",]


// forEach Loop does not return any value it gives undefined when return

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);

// ************************

// filter():


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// Reminder: If we use arrow function with {} then we have to retuen keyword use in the arrow function for return any value,
// or if we use () in the scope then no need to add keyword return

// const newNums = myNums.filter( (num) => (
//     num > 5
// ))   // filter() returns the values


// forEach loop instead of filter 

// const newNums = []

// myNums.forEach( (item) => {
//     if (item > 5) {
//         newNums.push(item);
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

// const userBooks = books.filter( (bk) => bk.genre === "History" )
let userBooks1 = books.filter( (bk) => {
    return bk.publish >= 2010 
})

userBooks1 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History" 
})
// console.log(userBooks);
console.log(userBooks1);
  

