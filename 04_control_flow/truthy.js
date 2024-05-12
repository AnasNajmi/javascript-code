const useremail= []
if(useremail){
    console.log("This is user email");
}else{
    console.log("This is not the email of the user");
}

//Falsy values
 //false, 0 , -0, BigInt 0n, "" , null, undefined, NaN

//Truthy values
//"0", 'false', function(){}, [], {}

//How to check if an array is empty or not 
const username= []
if(username.length===0){
    console.log("Array is empty");
}else{
    console.log(`Array contains ${username}`);
}
//How to check if the Object is empty or not
const myobj= {};
if(Object.keys(myobj).length===0){

    console.log("object is empty");
}else{
    console.log(myobj);
}

//Nullish Coalescing Operator (??): null undefined
let num1 = null ?? 100
let num2 = undefined ?? 150
console.log(num1);
console.log(num2);

//Terniary operator
let priceoftea= 100
priceoftea >= 90 ? console.log("less than 90"): console.log("more than 80");








