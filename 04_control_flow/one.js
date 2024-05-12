// if
//(1)//
// const temp= 42
// if(temp==42){
//     console.log("temperature is above 40 degree");

// }else{
//     console.log("temperature is below 40 degree");
// }

//(2)//

function obtainmarks(marks){

if(marks<=60){
    return("Student has obtained C grade");
}else if(marks<=70){
    return("Student has obtained B grade");
}
else if(marks<=80){
    return("Student has obtained A grade");
}
else{
    return("Student has obtained A+ grade");
}
}
console.log(obtainmarks(10));


const userloggedin = true
const loggedinfromgoogle= true
const loggedinfromemail= false
const debitcard= true

if(userloggedin && debitcard){  //AND Condition if one is false condition won't run
    console.log("User can buy anything");
}
if(loggedinfromemail || loggedinfromgoogle){ //OR condition if one is true condition will run
    console.log("Give access to user");
}











