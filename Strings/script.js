// let fr ="dhruv";

// for(let i in fr){
//     console.log("index ", i , "is" , fr[i] );
// }

//console.log("hello\"".length); // it will be print 6 length of string

//Explore include / startwith and endwith 

let word = "no";
let sententence = "the sentence is this";

console.log(`"word is" ${word}  "it " ${sententence.includes(word)? "is" : "is not"} in sentence`)

// it is print : "word is" no  "it " is not in sentence

console.log(`word is ${sententence.endsWith("this")}`); // it returns true

console.log(`word is ${sententence.startsWith("we")}`); // it returns false

// write program to convert a given string to upper case

console.log(sententence.toUpperCase());

// abstract the amount from given string.
let str = "the amount is 1000";

let amount = parseInt(str.slice(14));

console.log(amount);
console.log(typeof amount);


// try to change the 4 th charectore of given string 
// it is not possible becouse string is imutable but replace is possible.

let str1 = "were you able to  do it ?";

console.log(str1.replace("were", "can"));


