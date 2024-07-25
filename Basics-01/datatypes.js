let Nme = "xyzp"
let age = 50
let logein = true

let city = null
let country = undefined

//typeof type of variables

console.log(typeof Nme)
console.log(typeof age)
console.log(typeof logein)
console.log(typeof city)
console.log(typeof country)

console.log(typeof "rajesh")

console.log(typeof 88)




//primitive data types

// 7 Type of primitive data type: string, number, boolean, null, undefined, symbol, bigint

//Reference: (Non Primitive Data Types)

// Array, object, Function

//javascript is a dynamically typed language

// **************************** Symbol ********************************

const Id = Symbol("125")

const Id2 = Symbol("125")

console.log(Id == Id2); //op false because symbol give always unique value
console.log(typeof Id);


// Big Int

const BigInt = 8465465444651649566n;
console.log(typeof BigInt)

// Array

const heros = ["Shaktiman", "naagraj", "doga", "chotabheem"]
console.log(heros)
console.log(typeof heros);


// Object

let myObj = {
    Name : "aalu",
    Age : 18

}

console.log(myObj);

// Function

const myFunc = function(){
    console.log("Hello World")
}
myFunc()

console.log(typeof myFunc);