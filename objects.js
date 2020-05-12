// Joy is an object
// name age is a property
// Saurabh Gaurav 12 23 is a value
let joy = [
    {name:"Saurabh", age:12},
    {name:"Gaurav", age:23},
];
console.log(joy[0].name);
console.log(joy[0].age);


// Second way
let hope = {
    name: "Saurabh",
    age:21,
    greet: (keep)=>{
        console.log(`Welcome Mr. ${keep}`);
    }
};
hope.greet("Hola");


