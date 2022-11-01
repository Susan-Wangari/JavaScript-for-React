//destructuring
//normal object
const bio = {
    name:"Kay",
    age: 12,
    isWorking: false
};

//to access it
// const name= person.name;
// const age= person.age;
// const isWorking = person.isWorking;

//destructuring
const {name, age,isWorking} = person;

//another trick
// let name='Kay';
// let age= 12;

// const person ={
//     name,
//     age,
//     isWorking: false
// };

//spread operator
//here it is used to change the name of a person
//, is used to indicate addition
const person2 = {...person, name:"Pupo"}; // changes person name to Pupo

//spread in an array
const names = ['June', "Jay", "Jane"];
const names2 = [...names2, "Jael"]; //adds Jael to the array
