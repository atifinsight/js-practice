// for

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        // console.log("5 is best numebr"); 
    }
    // console.log(element); 
}

for (let i = 0; i <= 3; i++) {
    //  console.log("Outer Loop");
     for (let j = 0; j <=  i; j++) {
        // console.log("Inner Loop");
    }    
}

let myArray = ["atif", "imran", "soban"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index ==5) {
//         console.log("detected 5");
//         break
//     }
//     console.log(`Value of i is : ${index}`);
// }
for (let index = 1; index <= 20; index++) {
    if (index ==5) {
        console.log("detected 5");
        continue
    }
    console.log(`Value of i is : ${index}`);
}