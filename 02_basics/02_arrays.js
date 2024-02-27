const marvel_heros = ["ironman",  "hulk", "captain-america"]
const dc_heroes = ["superman",  "flash", "batman"]

// marvel_heros.push(dc_heroes) // when we use the push method it did not merge both the arrays properly
// console.log(marvel_heros);

// let allheroes = marvel_heros.concat(dc_heroes) // All the dc and marvel heroes are written together
// console.log(allheroes);

// const all_heroes_spread_method = [...marvel_heros, ...dc_heroes]// like concat method spread method is also used and it is mostly used in the code
// console.log(all_heroes_spread_method);

// const new_array_flat_method = [1,2,3,4,[5,6,7,[11,12,13]], 8,9,10] 
// let another_array = new_array_flat_method.flat(Infinity)
// console.log(another_array); // Flat method solves the problem of array within array and print it together

// console.log(Array.isArray("Anas"));
// console.log(Array.from("Anas")); //Method to convert any string into array 
// console.log(Array.from({name: "anas"})); // Interesting


let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1, num2, num3));//3 values defined by 3 different variables are converted into a single array