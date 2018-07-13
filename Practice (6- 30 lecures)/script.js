//lecture 6 variables
/*var name = 'noraiz';
console.log(name);

var lstName = 'maher';
console.log(lstName);

var age = 25;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 7 variables 2

//var name = 'noraiz';
//var age  = 25;
//console.log(name + age)

/*var job, isMarried;


job = 'student';
isMarried = false;
console.log(name + ' is a ' + age + ' he is ' + job + ' is he married ' + isMarried);

age = 'twenty Five';
job = 'teacher';
console.log(name + " is a " + age + " he is " + job + " is he married " + isMarried);

var lastName = prompt('what is last name?');
console.log(lastName);*/

/*var name = 'noraiz';
var age;
age = 25;
console.log(name + ' is ' + age + '  year old ' );
var lastName = prompt('what is you name');
console.log(lastName);*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 8 * operators

/*var now = 2016;
var birthYear = 25;

birthYear = now - birthYear * 2;
console.log(birthYear);

var ageJamal = 25;
var ageShariq = 25;

ageJamal = ageShariq = (3 + 5) * 5 - 4 + 4;
ageJamal--;
ageJamal *= 2;
ageJamal++;
console.log(ageJamal);
console.log(ageShariq);*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 9 if else statement

/*var name = 'jamal';
var age = 25;
var isMarried = prompt('are you married?Y/N')

if (isMarried == 'y') {
    console.log(name + 'is married happily and his age is '+ age );
}
else{
    console.log(name + ' hopefully married soon');
}
*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 10 if else statement

/*var age = prompt('Enter Your age')                                                      
if (age < 20) {
    console.log('shariq is teenager');
}
 else if(age >=20 && age <=30){
      console.log('shariq ');      
 }
 else{
    console.log('shariq is man');
}

var job = prompt ('plz enter your job');

switch (job) {
    case 'teacher':
            console.log("shariq is teacher");
        break;
    case 'driver':
            console.log('shariq drive car');
        break;
    case 'developer':
            console.log('shariq is a developer');
        break;
    case 'gamer':
            console.log('shariq is a gamer ');
        break;        
    default:
            console.log('shariq kuch nhi karta');
        break;
}
console.log('shariq is ' + age + ' and he is ' + job );

*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 11 Test

/*var noraizAge = prompt ('player1 enter ');
var noraizHeight =prompt('player1 enter height');

var shariqAge = prompt('player2 enter');
var shariqHeight= prompt('player2 enter height');

var noraizTotal = ( 5 * noraizAge ) + noraizHeight;
var shariqTotal =( 5 * shariqAge ) + shariqHeight;

if (noraizTotal>shariqTotal) {
    console.log('noraiz wins ' + noraizTotal);
}else if (shariqTotal>noraizTotal) {
    console.log('shariq wins');
}
else{
    console.log('Draw');
} 
*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 11 FUNCTION

/*function calculateAge(YearOfBirth) {
  var age = 2018 - YearOfBirth;
  return age;
}
var xulfiAge = calculateAge(1990);
console.log(xulfiAge);
function yearUntilRetirment(name, year) {
  var age = calculateAge(year);
  var retirment = 65 - age;

  if (retirment >= 0) {
    console.log(name + "is retired in " + retirment + " years");
  } else {
    console.log(name + "is already retired");
  }
}
yearUntilRetirment("noraiz", 1990);
yearUntilRetirment("noraiz", 2000);
yearUntilRetirment("noraiz", 1947);

*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 15 ARRAY

/*var names = ["noraiz", "Jamal", "Shariq"];
var ages = [1991, 1992, 1997];

console.log(ages);
names[2] = "rehan";
names[3] = "shariq";
names.push("xulfi");

names.unshift('abc');
console.log(names);
*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 16 OBJECTS
/*
var noraiz ={
    firstName : 'noraiz',
    lastName : 'mumtaz',
    dateOfBirth : 1991,
    job : 'teacher',
    isMarried : false
};
console.log(noraiz.dateOfBirth);
console.log(noraiz['dateOfBirth']);

var abc = 'job';
console.log(noraiz[abc]);
*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 17 OBJECTS

/*var noraiz = {
  firstName: "noraiz",
  lastName: "mumtaz",
  dateOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["xulfi", "jamal", "shariq", "rehan"],

  //calculateAge: function(dateOfBirth)                   Expression making 1
  // {
  // return 2018 - dateOfBirth;
  //}
  //Expression making 2
  calculateAge: function() {
    
    return 2018 - this.dateOfBirth;
  }
};
//console.log(noraiz.calculateAge(noraiz.dateOfBirth));   Expression calling 1
console.log(noraiz.calculateAge()); // EXpression calling 2

// adding element in object noraiz
var age = noraiz.calculateAge();
noraiz.age = age;

console.log(noraiz);
*/
/*
var jamal = {
  name: "jamal",
  job: "developer",
  dateOfBirth: 1991,
  calculateAge: function() {
    return 2018 - this.dateOfBirth;
  }
};
console.log(jamal.calculateAge());
var age = jamal.calculateAge();
jamal.age = age;
console.log(jamal);
*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 17 loops
/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}*/
// Assending loop
/* var names = ['noraiz','jamal','xulfi','shariq','rehan','abcs','def'];
for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    
}
*/
//Dessnding loop
/*var names = [
  "noraiz",
  "jamal",
  "xulfi",
  "shariq",
  "rehan",
  "abcs",
  "def",
  "gef"
];
for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}
*/

// while loop

/*var names = [
    "noraiz",
    "jamal",
    "xulfi",
    "shariq",
    "rehan",
    "abcs",
    "def",
    "gef"
  ];
var i = 0;
while (i<names.length) {
    console.log(names[i]);
    i++;
}*/

// break and continue in loops

// break consition
/*for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i === 8) {
    break;
  }
}

// continue condition

for (var i = 0; i < 10; i++){
    if (i === 5) {
        console.log(i+" noraiz");
        continue;
        
    }
    console.log(i);
}
*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 17 loops
// Array for person where born

/*function printFullAge(years) {
  var ages = [];
  var fullAges = [];
  for (var i = 0; i < years.length; i++) {
    ages[i] = 2018 - years[i];
  }
  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log("person "+(i+1)+ " is " + ages[i] + " years old , and is of full age.");
      fullAges.push(true);
    } else {
      console.log("person "+(i+1)+ " is " + ages[i] + " years old , and is not of full age.");
      fullAges.push(false);
    }
  }
  return fullAges;
}
var years = [1960, 1970, 1980, 1990, 2010];
var full_1 = printFullAge(years);
//svar full_2 =printFullAge([2012,2014,1990,1980]);*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 24
/*
var name = 'noraiz';
function first(){
  var a = 'Hello';
  second();
  var x = a +  name;

}
function second(){
  var b = 'Hello';
  third();
  var z = b +  name;

}
function third(){
  var c = 'Hello';
  var y = c +  name;
}
first();
console.log(first(c));

*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 26 hosting
// hosting work for FUnction declaration

//functions
/*calculateAge(1956);
function calculateAge(year) {
  console.log(2018 - year);
}*/
//calculateAge(1990); // this is hosting

// hosting is only work on function stattment not on function expression
// this is nor working because hosting is not working on function expression
/*retirment(1960);
var retirment = function(year){
  console.log(65 - (2018 -  year));

}*/
// this is working because this is not hosting
/*var retirment = function(year) {
  console.log(65 - (2018 - year));
};
retirment(1960);
*/

// variables
/*
//this is normal way
var age = 25;
console.log(age);

//this is the way of hosting
console.log(age1);
var age1 = 65;
*/

/*console.log(age); 
var age = 25;

 
function abc(){
  console.log(age);

  var age = 65;
  console.log(age);
}
abc();
console.log(age);
*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 27 scope
/*
var a = "hello,";
first();
function first() {
  var b = "hi,";
  second();

  function second() {
    var c = "hey,";
    third();
    function third() {
      var d = "noraiz";
      console.log(a + b + c + d);
    }
  }
}*/

////////////////////////////////////////////////
////////////////////////////////////////////////
//lecture 28 THIS KEY WORD

//console.log(this);
// this. call the windows object only... if there is no object is made
/*calculateAge(1950);
function calculateAge(year) {
  console.log(2018 - year);
  console.log(this);
}
*/

// we use this function to call object
var noraiz = {
  name: "noraiz",
  Dob: 1920,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.Dob);
    /*function innerFuncetion(){
      console.log(this );
      
    }
    innerFuncetion(); 
    */
  }
};
noraiz.calculateAge();

var jamal = {
  name: "jamal",
  Dob: "1930"
};
jamal.calculateAge = noraiz.calculateAge;
jamal.calculateAge();


