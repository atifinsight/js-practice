// reduce() method

const myNums = [1,2,3]


// we need to give accumulator initial value that it stores and next time it has the value which it receive from return and currentValue is the value of array we gave, reduce helps in shopping card where we store previous value and calculations like example below 

// const myTotal = myNums.reduce( (acc,currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc,currval) => acc + currval, 0)

// console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 4999
    },
    {
        itemName: "ai course",
        price: 11999
    },
]

const priceToPay = shoppingCard.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
