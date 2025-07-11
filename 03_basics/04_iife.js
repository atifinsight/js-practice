// Immediately Invoked Function Expression(IIFE)

// Gloabal scope ke polution(variable) se problem hoti hai kahi baar us se bachne k liye IIFE use krte hain, ()();, ()=> Wrap function in parathesis , ()=> for calling without function name, ; => to end the context

(function chai(){
    // named iife
    console.log('DB CONNTECTED');
})();

( (name) => {
    // simple iffe
    console.log(`DB CONNECTED TWO ${name}`);
    
} )("Atif")