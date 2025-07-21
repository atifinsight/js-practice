// Can we change the property or value of PI

const descriptor = (Object.getOwnPropertyDescriptor(Math, 'PI'))
// console.log(descriptor);


const chai = {
    name: "ginger",
    price: 200,
    isAvailable: true,

    orderChai: function(){
        console.log("COde fatt gya");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}, ${value}`);
    }
    
    
}






// console.log(Math.PI);
