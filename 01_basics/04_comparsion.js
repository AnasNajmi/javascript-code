console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 < 1);
console.log(2 != 1);

//we face problem when same datatypr is not compared//
console.log("2" > 1);
console.log("03" > 2);
console.log("02" == 2)

console.log(null > 0)
console.log(null >= 0);// Here null is converted to zero because of ">=" operator
console.log(null <= 0);// Here null is converted to zero because of "<=" operator
console.log(null == 0); // Here null is converted to zero because of == operator

// STRICT CHECK => "==="
console.log("02" === 2);