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
//lecture * operators








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

var noraizAge = 25;
var noraizHeight = 6;

var shariqAge = 30;
var shariqHeight= 5;

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












