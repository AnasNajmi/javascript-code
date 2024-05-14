//for each loop 
//This loop is special as it is used extensively, it has a special way to write 
//First we will define an array
//now write the name of the variable and put '.' next to it and call for each() keyword/method
//then in () of for each write a function
//Do not write the function name   
let coding = [ 'python', 'cpp', 'java', 'javascript', 'sql']
//(1) first method with simple function without function name 
coding.forEach( function (val){
    //console.log(val);
})
//(2) Second method with arrow function

coding.forEach(  (val1)=>{
    //console.log(val1);
}  )

//(3) Third method here we write a function and then use for each outsude the function 
function fun(item){
    console.log(item);
}
coding.forEach(fun)

//(4)
coding.forEach( (val2, index, array)=>{
    console.log(val2, index, array);
} )

//Multiple objects defined in an array 











