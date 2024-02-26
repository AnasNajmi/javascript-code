// let currentdate = new Date()
// console.log(currentdate.toString());
// console.log(currentdate.toLocaleTimeString());
// console.log(currentdate.toTimeString());


// created a function and created a instance with "new" keyword of a user defined object Person  
// function Person(name, age){
//     this.name= name;
//     this.age= age;

// }
// let person1 = new Person("anas", 23)
// console.log(person1.name);
// console.log(person1.age);

let newdate = new Date("02-20-2001")
console.log(newdate.getTime());

//Very important for hotel app , To generate Quiz, or when you are creating a pole.
let timestamp = Date.now()
console.log(timestamp);