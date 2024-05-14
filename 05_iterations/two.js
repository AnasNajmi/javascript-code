//While loop
let index = 1  // Checks for even and odd numbers
while (index <=20) {
    if(index % 2 == 0){
        console.log(`${index}:is an Even number`);
    }else{
        console.log(`${index}: is an Odd Number`);
    }
    // console.log(index);
    index = index+1
}

//(2)   Do While Loop
let score =0
let arr = ["pakistan", "india", "newzeland"]
do {
    console.log(arr[score]);
    score= score+1
} while (score<arr.length);








