//Javascript is Dynamically typed language because at run time we do not have to write the datatype
//it automatically selects the datatype by  the value they hold at runtime//

//How data is stored in memory and later access for that we have two categories of data //
//PRIMITIVE DATATYPE(Call by value)

// 7 types: String, Number, boolean, null, undefined, Symbol, Bigint
const score = 100
const spelling = "alphabets"
const Isloggedin = true
const outsidetemp = null
let useremail = undefined
const Id = Symbol("123")
const anotherId = Symbol("123")
console.log(Id === anotherId);
const largernumber = 123456789432325235235n




//NON-PRIMITIVE OR REFERENCE TYPE
// Array, Objects, Functions


//Array
const heroes = ["ironman", "spiderman"];
//Object
let myobj = {
    name: "anas",
    age: 23

}
//function
 const myfunction = function(){
    console.log("hello world")
 }
console.log(typeof myfunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack and Heap Memory in Javascript
//Stack(Primtive datatype) Jo bhi varibale declare kia hy humy uski aikcopy milti hy
//Heap(Non-Primitive) Original value ka reference milta hy

//Heap Example
let userone = {
    name: "anas",
    email: "anas@gmail.com",
}

let usertwo = userone
usertwo.email = "usamanajmi@gmail.com"
console.log(userone);
console.log(usertwo);
console.log(usertwo.email);

//Stack Example 
let num1 = "1234"
let num2 = num1
num2 = "456"
console.log(num1);
console.log(num2)


