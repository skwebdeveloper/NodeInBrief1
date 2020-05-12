// let hobby = ["Bad", "poo"];
// console.log(hobby.map(hobbyies => "Hobbby " + hobbyies));



//Working of spread operator
const person = {
    name:"Saurabh",
    age:21,
    joy:"yes"
}

// Destructuring
// 1 ....
// const joy = (namedata) =>{
//     console.log(namedata.name);
// };

// joy(person);
// 2 ....
const joy = ({ name,age }) => {
    console.log(name,age);
};
joy(person);


// Aschronous 
setTimeout(() =>{
  console.log("Hello World");
}, 2000);














// This is for spread and rest

// console.log(person);
// const yo = {...person};
// console.log(person);


