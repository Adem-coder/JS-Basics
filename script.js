/*
console.log("Hello World!!!");
var hello = 'goof';
console.log(hello);
var bye = 'ball';
console.log(bye);
console.log(hello +" "+ bye)
var job;
job = "hello";
console.log(job);
*/
/*
var james = 30;
var fullAge = true;
console.log(fullAge);
*/

/**************   Variable Mutation and Type Coercion ***************/

var firstName = "John";
var age = 28;

// Type Coercion

var job, isMarried;
job = "Teacher";
isMarried = "false";
console.log(firstName+" is a "+age+" years old "+ job+". Is he married?"+isMarried);

// Variable Mutation

age = 'twenty eight';
job = 'driver';
alert(firstName+" is a "+age+" years old "+ job+". Is he married?"+isMarried);

var lastName = prompt("What is his last name ?");
console.log(firstName + " " +lastName);