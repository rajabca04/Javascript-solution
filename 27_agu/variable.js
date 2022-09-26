
// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

let myName = "raja kumar";
let data = true;
let data1 = null;
let data2 = undefined;
console.log(" Value ----------- Type ")
console.log("...........................")
console.log(myName +" ----> "+ typeof(myName));
console.log(data +" ----> "+ typeof(data));
console.log(data1 +" ----> "+ typeof(data1));
console.log(data2 +" ----> "+ typeof(data2));

/*
1.Answer:-

Value ----------- Type 
...........................
raja kumar ----> string
true ----> boolean
null ----> object
undefined ----> undefined

*/

// ______________________________________________

// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

let firstName = "Raja";
let lastName = "kumar";
let maritalStatus = "Unmarid";
let country = "India";
let age = 22;

console.log(`firstName ->  ${firstName}, lastName -> ${lastName} ,maritalStatus -> ${maritalStatus} ,country -> ${country} ,age -> ${age}`);

/*
2. Answer

firstName ->  Raja, lastName -> kumar ,maritalStatus -> Unmarid ,country -> India ,age -> 22

*/

// ______________________________________________________


// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

let myCase = "raja kumar sharam";

console.log(myCase.toUpperCase());

/*
3. Answer
    RAJA KUMAR SHARAM
*/

// 4. Check if the string contains a word Script using includes() methood.

let myString = ["I", "am", "raja", "kumar", "sharma"];
console.log(myString.includes("raja"));

/*
4.  Answer
    true
*/

// ____________________________________________________________

// 5. Split the string into an array using split() method

let myStr = "i am raja kumar sharma";
let da = myStr.split(" ");
console.log(da);

/* 
5. Answer
[ 'i', 'am', 'raja', 'kumar', 'sharma' ]
*/

// ____________________________________________________________


// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let mySpl = "Facebook, google, microsoft, apple, IBM, Oracle, Amazon";

let s = mySpl.split(",")
console.log(s)

/*
6. Answer
[
  'Facebook',
  ' google',
  ' microsoft',
  ' apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]

*/

// ____________________________________________________

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

