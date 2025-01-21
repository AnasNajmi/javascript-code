//Function within a function//
//Closure/

//{}  curly braces is called scope when it comes with conditional statement or in functions
//Global scope ki declared value hum function, if/else ky scope myn access kr skty hyn but 
//Block scope like:
//  if(true){
      a = 30
      b= 40
      c = 60 

//} //ye block scope hy or iski value global scope myn access nhi honi chye 




function one(){
    const username = "anas"
    console.log(username);


    function two(){
        const website = "google.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username = "anas"
    if(username === "anas"){
        const website =" youtube " 
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++++++++++++++++++++++++Interseting Hoisting concept+++++++++++++++++++


//Function Declaration
function addone(num){     //First way to declare a function//
    return num + 1
}
console.log(addone(5));


//Function initialization
const addtwo = function(num){   //Second method to declare a function//
    return num + 2 
}
console.log(addtwo(5));



