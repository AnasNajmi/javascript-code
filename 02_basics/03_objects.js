//singelton objects
const  mysym = Symbol("Key1"); //Symbol is defined 


let myobj = {
    name: "Anas",
    Age: 23,
    [mysym]: "key1", // Method to declare a symbol in an object
    address: "Lahore",
    email:"anas@google.com",
    IsLoggedin: true,
    lastlogindays: ["Monday", "saturday"]

}
//There are 2 ways to acess the value of an object and that is explained below

console.log(myobj.IsLoggedin);// First method
console.log(myobj["Age"]);// Second Method
console.log(myobj[mysym]);

console.log(myobj);
myobj.email = "anas@gmailchatgpt.com" //we can change the value of an object by using the "=" symbol 
console.log(myobj);
