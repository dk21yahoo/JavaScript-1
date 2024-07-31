
function sayMyName(){
    console.log("A");
    console.log("a");
    console.log("a");
    console.log("l");
    console.log("u");
    console.log("P");
    console.log("a");
    console.log("n");
    console.log("i");
}

//  sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

 console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){ // ! for cheking the username is undefined or not
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aalu"))
// console.log(loginUserMessage("Aalu"))


function calculateCartPrice(val1, val2, ...num1){  // ...num1 is rest oprator 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Pani",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));



function MyTry(a1, a2, a3) {

    if(a1 === a2) {
        console.log("a1 and a2 are equal");
        
    }

    if(a2 === a3) {
        console.log("a2 and a3 are equal");
        return
    }
}

MyTry(30, 10, 10)

