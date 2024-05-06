
const user = {
    username :"anas",
    price : 999,

    welcomemessage : function(){
 
       console.log(`${this.username}, Welcome to our website`);
       console.log(this);

    }

}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()



// function chai(){    //this can only be accessed through Object not by alone function//
//     let user= "anas"
//     console.log(this);
// }
// chai()

// const chai = function(){    
//     let user= "anas"
//     console.log(this.user);
// }
// chai()

//++++++++++++++Arrow function +++++++++++++++++++++++++++++
//(1)//
const chai = () =>{
    let user= "anas"
    console.log(this);
}
// chai()

//(2)//

const addtwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addtwo(3, 8));

//(3)// Implicit return (In implicit return {} are removed and return statement is also removed)
// (Implicit return is only applicable for single line return function)
//Example below//

const adtwo = (num1, num2) => num1 + num2  //Implicit return function//
// console.log(adtwo(3, 1));

//(4)// When we use {} writing return statement is necessary
//But in Arrow functions when we need to return something () are used
//This technique is very useful for REACT when we learn REACT so keep in mind

const adddtwo = (num1, num2) => (num1 + num2)  //Here "=> (num1 + num2)" is RETURN statement //
// console.log(adddtwo(4, 3));

//(5)// () is used to return because we cannot define Objects in {}
const addddtwo = (num1, num2) => ({username: "anas"}) //Here object is being returned//
console.log(addddtwo());





