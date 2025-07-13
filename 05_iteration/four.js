// forEach loop

const coding = ["js", "ruby", "java", "python"]

// In forEach loop use function, call back function does have any name
// coding.forEach( function (item) {   
//     console.log(item);
    
// } )


// Arrow function
// coding.forEach( (val) => {
//     console.log(val);
    
// } )


// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)     // Here just give function reference like printMe, not execte here like printMe() => not allowed here, just mention reference.


// forEach have more value inside: Value, Index and Full array, we can use according to our need.
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )