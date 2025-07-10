const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)   // it concatenate both array values
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]     // It separate all values of array into single single value
// console.log(all_new_heros)   

const another_array = [1,2,3,[4,5,6],7,[6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)     // it gives all arary values even nested array values into normal array values

// console.log(real_another_array)


// console.log(Array.isArray("Atif"))  // result show false because its not array
// console.log(Array.from("Atif"))     // from convert its element into array values it gives output like 'A', 'T', 'I', 'F'

// console.log(Array.from({name: "Atif"})) // interesting  give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // it convert all variable values int array form