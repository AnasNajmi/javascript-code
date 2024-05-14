


for (let index = 0; index !=20 ; index= index + 2) {
    const element = index;
    if(index==5){
         console.log("5 is the best number ever");
    }
     console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i+ '*' + j + '=' + i*j );
        
        
    }
    
}

let myarray = ["batman", "aquaman", "spiderman"]
console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
    
    
}

for (let index = 1; index <= 20; index++) { ///BREAK CONDITION
    if(index==5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of index is ${index}`);
    
}

for (let index = 1; index <= 20; index++) { /// CONTINUE CONDITION
    if(index==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of index is ${index}`);
    
}




