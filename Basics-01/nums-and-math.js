// Numbers 

const balance = new Number (200)

console.log(balance);

// convert this number to a string

console.log(balance.toString().length);

// after conversion you can easily use the properties of string in this

// toFixed

console.log(balance.toFixed(2)); // o/p 200.00

// toPrecision

const anoNumber = 289.668
console.log(anoNumber.toPrecision(4));// op depends on nummber

// toLocalString

const aNumbers = 100000000
console.log(aNumbers.toLocaleString());

// in indian math use: 'en-IN'

console.log(aNumbers.toLocaleString('en-IN'));

// console.log();



//******************************* Maths *******************************//

// abs
console.log(Math.abs(-8)); //absolute value // o/p: 8


// round
console.log(Math.round(8.6));
console.log(Math.round(8.5));
console.log(Math.round(8,3));

// ceil
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.8));

// floor
console.log(Math.floor(7.2));
console.log(Math.floor(7.1));
console.log(Math.floor(7.8));

// min
console.log(Math.min(4, 8, 7, 6, 2));

// max
console.log(Math.max(7, 5, 3, 7, 6, 4));

// random
console.log(Math.random());
console.log((Math.random()*10 + 1));

const min = 1
const max = 6

console.log(((Math.random() * (max - min)) + 1)+min);

console.log((Math.round(Math.random() * (max - min)))+min);

