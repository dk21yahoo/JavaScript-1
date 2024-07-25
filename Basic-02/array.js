// arrays in js

const myArr = [1, 2, 3, 4, 5, 6, 7]
console.log(myArr);
console.log(myArr[2]);

const Heros = ["Iron man", "Super man", "Spider man"]
console.log(Heros[2]);

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8)
console.log(myArr2);

myArr.push(8,9)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(3)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(8)); //true because 8 present inarray
console.log(myArr.includes(10)); // false

const newArr = myArr.join()
console.log(newArr); // join() convert to string 

const mArr1 = myArr.slice(1,3)
console.log(myArr);
console.log("slice",mArr1);

const mArr2 = myArr.splice(1,4)
console.log(myArr);
console.log("splice ",mArr2)


// *********** Array-2 ************

const marvel_heros = ["IronMan", "Thor", "SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //adding to array

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros); // anoter metod for adding to array

// flat() 
const another_arrays = [1, 2, 3, 4,[5, 6, 7 , 8],9, 10, [11, 12, [13, 14, 15],16],17]
const real_array_flat = another_arrays.flat(Infinity)
console.log(real_array_flat);

// isArray() from()
console.log(Array.isArray(marvel_heros))
console.log(Array.from("Mobile"));

// object in array
console.log([{name: "Mobiles"}]);

//of()
const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;
console.log(Array.of(score1, score2, score3, score4));