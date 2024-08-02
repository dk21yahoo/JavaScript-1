// if

const Loggedin = true;
const NotenterNumber = false;

if (Loggedin && NotenterNumber) {
    console.log("ok all set to go");
} else {
    console.log("please enter your mobile number first");
}


const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// Logical oprator
if (userLoggedIn && debitCard && 2==3) { // both value true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // any one value true
    console.log("User logged in");
}