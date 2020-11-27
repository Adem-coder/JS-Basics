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
/*
var firstName = "John";
var age = 28; 
*/

// Type Coercion

/*
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
*/

/******************** Basic Operators *****************************/

// Maths operators
/*
var now, ageJohn, ageJames;
ageJohn = 28;
ageJames = 33;
now = 2020;
yearJohn = now - 28;
yearJames = now - 33;
console.log(yearJohn);
console.log(now + 2);

//Logical Operators
var older = ageJames > ageJohn;
console.log(older);

//Type of Operator
console.log(typeof older);
console.log(typeof ageJohn);
 var x;
 console.log(typeof x);
 */


 /********************** Operator Precedence ************************/
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

//Multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageJames = 35;
var average = (ageJames + ageJohn)/2;
console.log(average);

//Multiple Assignments
// (right to left)
var x, y;
x = y = (3 + 5) * 4 - 6; 
console.log(x, y);

//More Operators
// x = x*2;
x *= 2;
console.log(x);
x +=10;
console.log(x);
x = x + 1;
x +=1;
x++;
*/
/*************************BMI***********************/
/*
var markHeight = 1.80;
var johnHeight = 1.75;
var markWeight = 70;
var johnwegiht = 60;
var markBmi = markWeight/(markHeight*markHeight);
var johnBmi = johnwegiht/(johnHeight*johnHeight);
var bmi = markBmi > johnBmi;
console.log("Is Mark's BMI greater than John's BMI ? "+ bmi);
*/

/*************************If else statement***************************/
/*
var firstName = 'John';
var civilStatus = 'Single';
if (civilStatus === 'married'){
    console.log(firstName + ' is Married!');
}else{
    console.log(firstName + ' is Single!');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is Married!');
}else{
    console.log(firstName + ' is Single!');
}
*/

/**************************** Boolean Logic *******************************/
/*
var firstName = "John";
var age = 16;
if (age < 13 ){
    console.log(firstName + ' is a boy.');
}else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');
}else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
}else{
    console.log(firstName + ' is a man.');
}
*/

/*******************The Ternary Operator and Switch Statement******************/

// The Ternary Operator
var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' drinks beer.'): console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer': 'juice';
console.log(drink);

// Switch Statement
var job = 'driver';
switch (job){
    case 'teacher':
    case 'driver':
    console.log(firstName + ' teaches for a living.');
    break;
    default:
        console.log(firstName + ' has no job.');
}

age = 10;
switch (true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man');
}