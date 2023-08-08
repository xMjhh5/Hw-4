//Calculate area of a rectangle
let length = 10;
let width = 5;
let area = length * width;
console.log("The area of the rectangle is: ", area);


//The Temperature Converter
let celsius = 40;
let fahrenheit = 100;
let CelsiusToFahrenheit = celsius * 9/5 + 32; 
let FahrenheitToCelsius = (fahrenheit - 32 ) * 5/9;

console.log(celsius + "C is " + CelsiusToFahrenheit + "F.");
// console.log(fahrenheit + "°F is " + fahrenheitToCelsius + "C.");




//Convert hours to seconds
let hour = 24;
let minuteOfHour = 60;
let secOfMinute = 60;

let sec = minuteOfHour * secOfMinute;
let result = hour * sec;
console.log(hour + " hours are equal " + result + " seconds");


//Leap year

let year = 2020;
let isLeap =  (year % 4 == 0 && (year % 100 == 0 || year % 400 !== 0)) ? 
                        year + " Is  Leap year" : year + " Is Not Leap year"
                        console.log(isLeap)
                                                                     
   


//Find the a number is present in given range

let number = 11;
let start = 11;
let end = 30;
let res = (number <= start || number >= end) ? 
    number + " number is Not present in given range" : number + " number is present in given range";
    console.log(res)



//Factorial numbers
let num = 9;
let elements = 1;
for (let i = 1; i <= num; i++) {
      elements *= i;
    }
    console.log(num + "! = " + elements)