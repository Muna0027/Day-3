const base = 20;
const height = 10;
const areaofTriangle = 0.5* base * height;

console.log(`The area of the triangle is ${areaofTriangle}`)

const sideA = 5;
const sideB = 4;
const sideC = 3;
const perimeterOfTriangle = sideA + sideB + sideC; 
console.log(`The perimeter of a triangle is ${perimeterOfTriangle}`)

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) *** THIS ONE IS ON THE FENCE*

/*const length = 4;
const width = 6;
const areaOfRectangle = prompt(length * width);
const perimeterOfRectangle = (length + width * 2)
console.log(areaOfRectangle)
console.log(perimeterOfRectangle)*/


//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const PI = 3.14
let radius = 200
const areaOfCircles = (PI * radius *radius)
console.log(areaOfCircles)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2

/*const x = 2;
const y = '2x - 2';
const slope*/

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

//Compare the slope of above two questions.

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//Write a script that prompts a user to enter hours and rate per hour. Calculate pay of the person?


const hoursWorked = 40;
const rateOfPay = 28;
const employeePay = (hoursWorked * rateOfPay)
console.log(`Your weekly earning is ${employeePay}`)

// If the length of your name is greater than 7 say, your name is long else say your name is short.

//Compare your first name length and your family name length and you should get this output.

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.


const myAge = 987;
const yourAge = 567;
console.log(`I am ${myAge - yourAge} year(s) older than you`)

/* Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/

const question = window.prompt('What year were you born?');
const currentYear = 2022
const minBirthYear = 2004
const yourBirthYear = 2004 > 2005

console.log(`You are ${currentYear - yourBirthYear} You are old enough to drive.`)

/* Write a script that prompts the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years. 

Enter number of years you live: 100.You lived 3153600000 seconds.*/

/* Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */

const today = new Date()
const year = today.getFullYear() 
const month = today.getMonth() + 1 
const date = today.getDate()
const hours = today.getHours() 
const minutes = today.getMinutes()
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)

const to = new Date()
const year = to.getFullYear() 
const month = to.getMonth() + 1 
const date = to.getDate()
const hours = to.getHours() 
const minutes = to.getMinutes()
console.log(`${year}/${month}/${date} ${hours}:${minutes}`)

const t = new Date()
const year = t.getFullYear() 
const month = t.getMonth() + 1 
const date = t.getDate()
const hours = t.getHours() 
const minutes = t.getMinutes()
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) I'm not ure this one is properly answered.
let x1 = 6, y1 = 2;
let x2 = 10, y2 = 2;
let slope = (x1, y1, x2, y2);
console.log("Slope is " + (x1, y1, x2, y2))

//Compare your first name length and your family name length and you should get this output.

let firstName = 'Muna';
let lastName = 'Adan';
console.log(firstName, lastName, firstName.length , lastName.length)

/* Your first name, Asabeneh is longer than your family name, Yetayeh
Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.*/

let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
let myAge = 250;
let yourAge = 25;

console.log(firstName, lastName, myAge - yourAge)

//Enter number of years you live: 100
//You lived 3153600000 seconds.
 
let age = 100;
let yearInSeconds = 31536000;
console.log(age*yearInSeconds)
                  
/* Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1997
You are 25. You are old enough to drive

Enter birth year: 2007
You are 15. You will be allowed to drive after 3 years.
Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years*/

    //NEEDS WORK

const question = window.prompt('What year were you born?');
const currentYear = 2022
const minBirthYear = 2007
if (yearOfBirth) {
    minBirthYear < 2007
    console.log(`You are ${currentYear - minBirthYear} You are 15. You will be allowed to drive after 3 years.`)

} else {

} console.log(`You are ${currentYear - minBirthYear} You are old enough to drive.`)
// if you were born before 2004 you are too young to drive


console.log(`You are ${currentYear - minBirthYear} You are old enough to drive.`)







