// Stack (Primitive data types)
// Stack give copy of value

let emailOne = "example@example.com";

let emailTwo = emailOne;

emailTwo = "Change@example.com"

console.log(emailOne)
console.log(emailTwo)

// Heap Memory (Non Primitive data types) use
// Heap give a Refrence

let userOne = {
    email: "heap@example.com",
    age: 18,
    city: "Jaipur"
}

let userTwo = userOne

userTwo.email = "ChangeHeap@example.com";

console.log(userOne);
console.log(userTwo);