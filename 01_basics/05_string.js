let name = "anas-najmi"
let myage = 23
//String Interpolation//
console.log(`Hi, I am ${name} and I am ${myage} years old`);

const gamename = "anas"
//Methods of Javascript//
console.log(gamename.length);
console.log(gamename.toUpperCase);
console.log(gamename[3])
console.log(gamename.indexOf("s"))
//substring method//
let newstring = name.substring(0, 5)
console.log(newstring);
//slice method you can also give negative value //
const anotherstring = name.slice(-8, 4)
console.log(anotherstring);
//Trim method mostly used in signup pages very important method//
const newstringvalue = "     pakistan      "
console.log(newstringvalue.trim());
console.log(newstringvalue);
//replace method for urls when a user enters a wrong or missing url//
const url = "https://anasnajmi.com/anas%20najmi"
console.log(url.replace('%20', '-'));
//include method check whether the given word is present in the string or not//
console.log(url.includes('anas'))
//Read all string operations from mdn.com//
