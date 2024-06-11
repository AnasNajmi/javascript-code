// //Filter map and reduce in javascript
// const coding = ["python", "javascript", "java"]

// coding.forEach ( (item)=>{
//     console.log(item);
//     // return item

// } )
// console.log(values);

//(2) Filter method is used in many places 
// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums= mynums.filter ((num)=>num>4) //when we use () then return is not required
// console.log(newnums);

//(3) Filter method with scope declarartion inside arrow function
// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums= mynums.filter ((num)=>{ 
//    return num>4 //Here we have to use the 'Return' statement because {} are used inside arrow fumction
// })    //When scope{} is opened you have to use the return keyword 
// console.log(newnums);

//

//(4) 
// const newNums = []
// mynums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

//(5)
//Database implimentation

const books= [
    {title:'book1', genre:'drama', publish:1981, edition: 2004},
    {title:'book2', genre:'science', publish:1982, edition: 2005},
    {title:'book3', genre:'education', publish:1983, edition: 2006},
    {title:'book4', genre:'education', publish:1984, edition: 2007},
];

let userbook = books.filter( (bk)=> bk.genre ==='education')
userbook = books.filter( (bk)=> bk.edition>=2000 && bk.genre ==='science' )
console.log(userbook);
