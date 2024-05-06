// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS//
//(1)We use iifi when global scope is polluting our local scope //
//(2)OR when we need to connect to database immediately//

(function chai(){
    console.log(`DB CONNECTED`);
})(); //This is called iife syntax add ( at start of function and end it with )
//At the end write "()" this is used to return the function
//At the end also apply ";" 


//Arrow function example (iife)//
( ()=> {
    console.log(`DB2 CONNECTED`);
})()