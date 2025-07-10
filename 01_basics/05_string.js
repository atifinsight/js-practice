const name = "Atif"
const repoCount = 50

// `` => string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('AtifKhan is good')

console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('f'))

const anotherString = gameName.slice(0, 5)

console.log(anotherString)


const newStringOne = "    Imran     "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://www.atif.com/atif%20khan"

console.log(url.replace('%20', '-'))

console.log(gameName.split(' '));
