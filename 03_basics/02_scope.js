//Function within a function//
//Closure//

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
// one()


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

function addone(num){     //First way to declare a function//
    return num + 1
}
console.log(addone(5));

const addtwo = function(num){   //Second method to declare a function//
    return num + 2 
}
console.log(addtwo(5));



