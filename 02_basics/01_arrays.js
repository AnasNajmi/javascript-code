const arr = [1, 2, 3, 4, 5,]
//This method adds value to the array
arr.push(7)

//This method POPS the last value of the array
arr.pop()

// arr.shift() //it removes the first digit of the array 
// arr.unshift(2) // It adds the given value at the start of the array 

// console.log(arr.includes(2))
// console.log(arr.indexOf(5));

// const newArr = arr.join() // This converts the array into string //
// console.log(newArr);
// console.log(arr)
// console.log(typeof newArr);


//slice and splice 
console.log("A ", arr);

const mya1 = arr.slice(1 , 3) //slice(startindex, endindex ) //start from index1(inclusive) and extract until index-3(exclusive)
console.log("B", mya1);

const mya2 = arr.splice(1,4) //splice(start, totalno) //start removing from index-1(inclusive) and remove 4 elements in total
                             //and print the removed objects
console.log("C", mya2)

