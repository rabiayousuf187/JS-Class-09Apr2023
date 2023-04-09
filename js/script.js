console.log('JS  Dated: 09 Apr 2023');
// // Chapter: 28  Converting strings to integers and decimals

console.log("Chapter: 28  Converting strings to integers and decimals");

var age = prompt("Enter Your Age:"); //22.5
var new_age;
console.log("Age ==== ",age, typeof(age));

console.log("Convert String to Int Using parseInt() ==== ", new_age = parseInt(age), typeof(new_age));

console.log("Convert String to Float USing parseFloat() Using  ==== ",new_age = parseFloat(age), typeof(new_age));

console.log("Convert String to Int Using parseInt() ==== ", parseInt(age), typeof(parseInt(age)));

console.log("Convert String to Int OR Float USing Number()  ==== ", Number(age), typeof(Number(age)));

// Chapter: 29     Converting strings to numbers, numbers to strings

console.log("Chapter: 29     Converting strings to numbers, numbers to String");

let book_ID = "125351";
let float_Num = "25.565";
let num = "1096" ,Convert;


// Converting strings to numbers
console.log("book_ID ==== ",book_ID, typeof(book_ID));

console.log("Convert book_ID String to Number Using Number() ==== ", Convert = Number(book_ID), typeof(Convert));

console.log("Convert String to Number Using Number() ==== ", Convert = Number(float_Num), typeof(Convert));

// Converting numbers to String
console.log("Convert Number to String USing  ==== ", Convert = num.toString(), typeof(Convert));


// Chapter:    30   Controlling the length of decimals

console.log("Chapter:    30   Controlling the length of decimals");

let deci_num = 65.895455;



// Converting strings to numbers);

console.log("Limit Decimal values == till 0 Using num.toFixed(n)", Convert = deci_num.toFixed(0), typeof(Convert));

console.log("Limit Decimal values == till 3 Using num.toFixed(n)", Convert = deci_num.toFixed(3), typeof(Convert));
