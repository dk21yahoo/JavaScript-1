// singleton
// object.create

// object literals
const mysymbol = Symbol("key1")

const JsUser = {
    name: 'Aalu',
    "Full Name": "Pani Aalu",
    age: 18,
    email: 'aalu@google.com',
    Location: 'MP',
    LogedIn: true,
    [mysymbol]: "HelloJi",
    DayOfLogin: ["Monday","Tuesday","Wednesday","Thursday","Friday"]
}

// there are two way to access the elements of the object

// 1st
console.log(JsUser.email);

// 2nd

console.log(JsUser["email"]);

// access full name using this
console.log(JsUser["Full Name"]);

// if you want to access the symbol in the object

// symbol access
console.log(JsUser[mysymbol]);
console.log(JsUser);

// change the value of the object elements

JsUser.age = 20;
console.log(JsUser.age);

// freeze the object
// Object.freeze(JsUser);
// JsUser.name = "tala";
// console.log(JsUser.name);

JsUser.greeting = function(){
    console.log("Hello Js user welcome back!");
}

console.log(JsUser.greeting());

// string interpolation
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${JsUser.name} welcome back!`);
}

console.log(JsUser.greetingTwo());

JsUser.greetingThree = function(){
    console.log(`Hello Js user, ${this["Full Name"]} welcome back!`);
}
console.log(JsUser.greetingThree());