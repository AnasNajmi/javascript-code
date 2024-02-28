// How to define objects as singelton or with the help of Constructor//
// Both of these Methods are applicable to define an object  
let tinder = new Object() // 1: Singelton object
let tinder2 = { // 2: Non-singelton object
     name: "kabeer qamar",
} 
tinder2.newfun = function(){
    console.log(`He is a good boy and his name is ${this.name}`);
}
tinder2.name = "anas"
console.log(tinder2.newfun());


// Nested Objects method//
let user = {
    primeusername: "usama",
    secondaryuser: {
        name: "anas",
        roll_no: "SP21-BCS-011",
        department:   
        { 
            dep1: "Computer_science",
            dep2: "English_department",
            dep3: "Maths_department"

        } 
    }
}

console.log(user.secondaryuser);

 // How to merge the values of Objects
 const obj1 = {1:"a", 2:"b", 3:"c"}
 const obj2 = {4:"d", 5:"e", 6:"f"}

  let obj3 = Object.assign({}, obj1, obj2)
 console.log(obj3);
//Another method is the spread method and it is used extensively to add two objects as well as array 
//Spread Method very important
let obj4 = {...obj1, ...obj2}
console.log(obj4);

//When we fetch values from the database then this method is used 
//Here multiple objects are defined inside an array 
const users = [
    {
        id:1,
        email:"anas@gmail.com",
    },
    {
        id:1,
        email:"anas@gmail.com",
    },
]
//It is Mostly used in Database to retreive and fetch data 
console.log(Object.keys(users));
console.log(Object.values(user));
