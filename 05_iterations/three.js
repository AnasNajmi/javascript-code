//for of loop

//["", "", ""]
//[{}, {}, {}]

//(1)
let myarray= [1,2,3,4,5,6]
for (const arr of myarray) {
    // console.log(arr);  
}

//(2)
const greetings = "Hello world"
for (const greet of greetings) {

    // console.log(greet);    
}

//(3)
//Maps (these are known for unique values, value do not duplicate)

const map = new Map() //Maps are iteratable which means we can apply loop on maps
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')
// console.log(map);

for (const [key, value] of map) { //"[]" is used to access the key and value pair of map
    // console.log(key, value);
}

//(4) Objects
//Objects are not iteratable which means we cannot apply loop on objects 

let myobj = { 
    'game1': "spiderman",
    'game2': "GTA"
}
for (const [key, value] of myobj) { //Error that myobj is not itteratable
    console.log(myobj);
}


