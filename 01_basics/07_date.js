let myDate = new Date()

//Thu Jul 10 2025 15:05:42 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toString())

// //2025-07-10T15:05:42.824Z
// console.log(myDate.toJSON())

// //Thu Jul 10 2025
// console.log(myDate.toDateString())

// //2025-07-10T15:15:37.930Z
// console.log(myDate.toISOString())

// //7/10/2025
// console.log(myDate.toLocaleDateString())

// //3:15:37 PM
// console.log(myDate.toLocaleTimeString())

// //15:15:37 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString())

let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getDate())