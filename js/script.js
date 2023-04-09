console.log('JS  Dated: 09 Apr 2023');
// Chapter: 28  Converting strings to integers and decimals

var age = prompt("Enter Your Age:"); //22.5
var new_age;
console.log("Age ==== ",age, typeof(age));

console.log("Convert String to Int Using parseInt() ==== ", new_age = parseInt(age), typeof(new_age));

console.log("Convert String to Float USing parseFloat() Using  ==== ",new_age = parseFloat(age), typeof(new_age));

console.log("Convert String to Int Using parseInt() ==== ", parseInt(age), typeof(parseInt(age)));

console.log("Convert String to Int OR Float USing Number()  ==== ", Number(age), typeof(Number(age)));
