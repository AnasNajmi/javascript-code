// function SayMyName(){
//     console.log("A");
//     console.log("N");
//     console.log("A");
//     console.log("S");
// }

// SayMyName //This is the reference of the function
// SayMyName()  //This is the execution of the function

// function addtwonumbers(num1, num2){
// //    let result = num1+num2
// //    return result
//       return num1 + num2
    
// }

// const result= addtwonumbers(32, 23)//This is Called Argument
// console.log("The desired Result is ", result);

// function Userloggedin(username = "anas"){
//     if(!username){ //This means that the username value is undefined 
//         return  `Please Enter a username`
//     }
//     else{
//         console.log("User has logged in successfully")
        

//     }
//     return `${username} just logged in` 
// }
// console.log(Userloggedin())


//Function to write square of 2 numbers
// function squareofnum(num){
//     return  num*num;
// }
// console.log(squareofnum(2))
// console.log(squareofnum(27));

//Function to find area 
// function area(length, width){
//     area_of_rec = length*width
//     return `Area of this rectangle is= ${area_of_rec} square feet`

// }
// console.log(area(2, 3));

//function to calculate the perimeter and Area of circle
// function area_of_circle(radius){
//       return `Perimeter: ${2*Math.PI*radius}, Area: ${Math.PI*radius*radius}` 
// }
// console.log(area_of_circle(2));


//Basic Calculator Function
// function basiccal(numb1, numb2, base, height){
//     add= numb1+numb2
//     div=numb1/numb2
//     sub=numb1-numb2
//     multi=numb1*numb2
//     areaoftri= 1/2*numb1*numb2
//     return `Addition: ${add} 
// Subtraction: ${sub} 
// Multiplication: ${multi} 
// Division: ${div}
// Area of Triangle: ${areaoftri}`
     
// }
// console.log(basiccal(2, 3));


function Calculatecartprice(...number){ //It is called Rest operator and Spread operator and
     //it is used to pass multiple values and get them together in an array ...number 
     return number
}
console.log(Calculatecartprice(200,300,400,500));

//How to define objects and functions together

// const user = {
//     username: "anas",
//     price: 100,
// }

// function handleObject(AllUsers){
//     return `Name is ${AllUsers.username} and the price is ${AllUsers.price}`

// }
// console.log(handleObject(user));

// How to define array in an function 
const myarray = [200,300,400,5000]
function arrayoperation (array1){
     return array1[3]

}
console.log(arrayoperation(myarray));