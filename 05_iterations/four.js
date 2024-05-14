//for in loop for objects 
//if you want to run a loop for OBJECTS then for-in loop is used


const myobj= {
    game1 : 'GTA',
    game2 : 'Hitman',
    game3 : 'freedom fighters'

}
for (const key in myobj) {
    console.log(`${key} is called ${myobj[key]}`);
}

/// How apply loop on a ARRAY

let programming= ['js', 'ruby','python','java']
for (const key in programming) {
    console.log(programming[key]);
        
    }








