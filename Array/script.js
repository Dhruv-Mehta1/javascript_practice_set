// create an array and take one input element and print

// let arr = [1,23,34,55,6,2];
// let a = prompt("enter input element");
// a = parseInt(a);
// arr.push(a);
// console.log(arr);

// take input from user and enter i array untill user enter 0
// let arr = [];

// let a;
// do{
//     a = prompt("enter element");
//     a = parseInt(a);
//     arr.push(a);
// }while(a != 0)
//     console.log(arr);

// create an array and use a filter function and find element which is divided by 10

// let arr = [203,33,46,68,90];

// let newarr = arr.filter((Number)=>{
//     return Number % 10 == 0;
// });

// console.log(newarr);

//print sequence of  array squere
// let arr = [203,3,46,68,90];

// let newarr = arr.map((Number)=>{
//     return Number *Number;
// });

// console.log(newarr);


// create new array and find factorial of it using reduce funcion
let arr = [1,2,3,4,5,6];

let newarr = arr.reduce((n1,n2)=>{
    return n1 *n2;
});

console.log(newarr);
