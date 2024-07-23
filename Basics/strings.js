// String Interpolation

const Name = "Pani"
const Age = 15

console.log(`Hello my name is ${Name} and age is ${Age}`)

// Declare String

const state = new String('Madhya Pradesh')
console.log(state);

// This string use key value pairs
//ex

// 0: M
// 1: a 
// 2: d
// 3: h 
// 4: y 
// 5: a 
// 6: space
// so-on

console.log(state[0]); // o/p : M

console.log(state.length); // lenght of string o/p : 14

console.log(state.toUpperCase()); // lower case to upper case o/ p : MADHYA PRADESH

// charAt access charechter using index

console.log(state.charAt(2)); // o/p : d

// indexOf using character find index value

console.log(state.indexOf('P')); // case sensitive // index of p o/p : 7

// Substring

const newstring = state.substring(0, 8) // o/p : Madhhya P
console.log(newstring)

// Slice 

const anotherString = state.slice(0, -8)
console.log(anotherString);

const secondString = state.slice(-8, 0) //If the start index is greater than the end index, slice returns an empty string.
console.log(secondString);

const thirdString = state.slice(-9, -1);
console.log(thirdString);

// Trim 
const a = "    Jaipur     " //delete spaces
console.log(a)
const b = a.trim()
console.log(b)

// Replace

const url = ("www.google.com/about%20us")

console.log(url.replace("%20", "_")); // The first value you want to change  "%20", The second value with which you want to replace the first value "_"

// includes

console.log(url.includes("google")); // o/p : true //case sensitive

console.log(url.includes("pani")); // o/p : false

// Split

const str = " Hello my name is pani"
const sString = str.split("is")
console.log(sString);