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



// Converting Limit Decimal values 0);

console.log("Limit Decimal values == till 0 Using num.toFixed(n)", Convert = deci_num.toFixed(0), typeof(Convert));
// Converting Limit Decimal values 3);
console.log("Limit Decimal values == till 3 Using num.toFixed(n)", Convert = deci_num.toFixed(3), typeof(Convert));


// Chapter: 31 and 32 **** Getting the current date and time and Extracting parts of the date and time

console.log("Chapter: 31 and 32 **** Getting the current date and time and Extracting parts of the date and time");

let newDate = new Date();
console.log("new Date === ", newDate, typeof(newDate));

// get Day);
let dayNames = ['Sun','Mon','Tue','Wed', 'Thu', 'Fri', 'Sat'];
console.log("Get Day === .getDay()", newDate.getDay() , dayNames[newDate.getDay()]);

// get Date);
console.log("Get Date === .getDate()", newDate.getDate());

// get Month);
console.log("Get Month === .getMonth()", newDate.getMonth());

// get Full Year);
console.log("Get Full Year === ..getFullYea()", newDate.getFullYear());

// get Hour);
console.log("Get Hour === .getHours()", newDate.getHours());

// get Min);
console.log("Get MIn === .getMinutes()()", newDate.getMinutes());

// get Sec);
console.log("Get seconds === .getSeconds()", newDate.getSeconds());

// get MilliSec);
console.log("Get seconds === .getMilliseconds()", newDate.getMilliseconds());

// get Time);
console.log("Get MilliSeconds since midight of 1st Jan 1970 === .getTime()", newDate.getTime());

// get Time Zone);
console.log("Get getTimezoneOffset ===", newDate.getTimezoneOffset());

console.log("TodAY'S dATE IS ==== ", newDate.getDate() + "-" +  (newDate.getMonth()+1) + "-" +newDate.getFullYear())


