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
/*
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
*/
/*****************Truthy and Falsy Values and Equality Operators*************************/
/*
// var height;
var height = 23;
if (height || height === 0){
    console.log('Variable is defined.');
}else {
    console.log('Variable has NOT been defined.');
}

// Equality Operators
if (height == 23){
    console.log('The == operator does type coercion!');
}
*/
/***************Averages and if else statments*******************/
/*
var john = (89 + 120 + 103) / 3;
var mike = (116 + 94 + 123) / 3;
var marry = (97 + 134 + 105) / 3;
console.log(john, mike , marry);
if (john > mike && john > marry){
    console.log('John is the winner of the games with score of '+ john +".");
}else if (mike > marry && mike > john){
    console.log('Mike is the winner of the games with score of '+ mike +".");  
}else if (marry> john && marry > mike){
    console.log ('Marry\'s team wins with '+ marry + ' points.')
}else{
    console.log('There is a draw.');
}


if (john > mike){
    console.log('John is the winner of the games with score of '+ john +".");
}else if (mike> john){
    console.log('Mike is the winner of the games with score of '+ mike +".");
 
}else{
    console.log('There is a draw.');
}
*/

/***************************Functions*****************************/
/*
function calculateAge(birthyear){
   return 2020 - birthyear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1980);
var ageJane = calculateAge(1977);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName+ ' retires in '+ retirement+" years.");
  
    }else{
        console.log(firstName + ' is already retired.');
    }
}
yearsUntilRetirement(1950, 'John');
*/

/*********************Function Statements and Expressions****************************/
/*
//Function declaration
function whatDoYouDo(job, firstName){}

//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName +  ' drives students to school.';
        case 'designer':
            return firstName + ' designs cloths for a living.';
        default:
            return firstName + ' does somthing eles for a living.';
    }
}
console.log(whatDoYouDo ('driver', 'Adem'));
*/

/***************************Arrays****************************/
/*
// Initialize new array
var names = ['John', 'James', 'Jane', 'Mark'];
var years = new Array (1990, 1969, 1948);

console.log(names);
console.log(names.length);
 
// Mutate array data

// To change the data
names[1] = 'ben';
console.log(names);
 
// To add a data as a last element
names[names.length]= 'Marry'; 
console.log(names);

// Different Data types

var john = ['John', 'Smith', 1990, 'Teacher', false, 'driver'];

// To add to the end of the array

john.push('green');

// To add data to the start of the array

john.unshift('hello');
console.log(john);

// Remove element from the end

john.pop();
console.log(john);

// Remove element fron the start

john.shift();
console.log(john);

// To identify the position of an element in the array

console.log(john.indexOf(1990));
var isDriver = john.indexOf('driver') === -1 ? 'John is not a driver.':'John is a driver.';
console.log(isDriver);
*/

/**************************Tip Calculator**********************************/
/*
function johnBill(bill){
   var percentage;
   if (bill < 50){
       percentage = .2;
   }else if (bill >= 50 && bill < 200){
       percentage = .15;
   }else {
       percentage = .1;
   }
   return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [johnBill(bills[0]),
            johnBill(bills[1]),
            johnBill(bills[2])];
var finalValues = [tips[0] + bills[0],
                   tips[1] + bills[1],
                   tips[2] + bills[2]];
console.log(tips, finalValues);
*/

/************************ Objects and Properties *****************************/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthyear: '1990',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: 'false'
};
console.log(john);

// methods to call the object data.
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthyear';
console.log(john[x]);

// Muatating an object

john.job = 'driver';
john.isMarried = 'true';
console.log(john);

// New Object syntax

var jane = new Object()
jane.firstName = 'Jane';
jane.birthyear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/**********************Objects and Methods********************************/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthyear: '1990',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: 'false',
    calAge: function(){
        return this.age = 2020 - this.birthyear;
        // return 2020 - this.birthyear;
    }
};
console.log(john.calAge());

// To add new elements

// john.age = john.calAge();
john.calAge();
console.log(john);
*/

/**************************BMI Calculator(Object)*************************************/
/*
var john = {
    fullName: 'John Smith',
    mass: 78,
    height: 1.8,
    calBmi: function () {
        return this.bmi = Math.round(this.mass / (this.height * this.height));
    }
};

var mark = {
    fullName: 'Mark James',
    mass: 68,
    height: 1.75,
    calBmi: function () {
        return this.bmi = Math.round(this.mass / (this.height * this.height));
    }
};

if (john.calBmi() > mark.calBmi()) {
    console.log(john.fullName + ' has a ' + john.bmi + ' BMI.');
} else if (john.calBmi() > mark.calBmi()) {
    console.log(mark.fullName + ' has a ' + mark.bmi + ' BMI.');

} else {
    console.log('Both Mark and John have the same BMI.');
}
console.log(mark.bmi, john.bmi);
*/

/********************************Loops and Iteration*************************************/
/*
// for loop

for (var i=0; i < 10; i++){
    console.log(i);
}
for (var i = 1; i <=20; i += 2){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'Teacher', false, 'driver'];
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

// while loop

var i = 0;
while(i < john.length){
console.log(john[i]);
i++;
}

// Continue and break statements

var john = ['John', 'Smith', 1990, 'Teacher', false, 'driver'];

for (var i = 0; i< john.length; i++){
    if(typeof john[i] !== 'string') continue;
console.log(john[i]);
}

for (var i = 0; i< john.length; i++){
    if(typeof john[i] !== 'string') break;
console.log(john[i]);
}

// Looping Backwards

for(var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}
*/

/****************************Advanced tip and bill calculator************************************/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calTips: function(){
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i< this.bills.length; i++ ){
            var percentage;
            var bill = this.bills[i];
            if (bill < 50){
                percentage = .2;
            }else if (bill >= 50 && bill < 200){
                percentage = .15;
            }else {
                percentage = .1;
            }
            this.tips[i] = percentage * bill;
            this.finalValues[i] = bill*(percentage + 1);  
        }

    }
    
    
}

var mark = {
    fullName: 'Mark Robert',
    bills: [77, 375, 110, 45],
    calTips: function(){
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i< this.bills.length; i++ ){
            var percentage;
            var bill = this.bills[i];
            if (bill < 100){
                percentage = .2;
            }else if (bill >= 100 && bill < 300){
                percentage = .1;
            }else {
                percentage = .25;
            }
            this.tips[i] = percentage * bill;
            this.finalValues[i] = bill*(percentage + 1);  
        }

    }
    
    
}
function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calTips();
mark.calTips();


john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if(john.average > mark.average){
    console.log(john.fullName + '\'s family pays higher tips with average of $'+ john.average);
}else if (mark.average > john.average){
    console.log(mark.fullName + '\'s family pays higher tips with average of $'+ mark.average);
}else{
    console.log('Both '+ mark.fullName + '\'s and '+john.fullName + '\'s family pay equal.');
}


