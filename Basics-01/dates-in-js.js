// Dates 

let newDate = new Date()
console.log(newDate)

console.log(newDate.toString())
console.log(newDate.toDateString())
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleDateString())
console.log(newDate.toISOString())


let createdDate = new Date('2024-7-25')
console.log(createdDate.toLocaleString()); 



let ndate = new Date()
console.log(ndate)
console.log(ndate.getDate());
console.log(ndate.getTime());
console.log(ndate.getMinutes()); // many more


// Miliseconds to seconds

console.log(Date.now() / 1000);

console.log(Math.round(Date.now() / 1000));
console.log(Math.floor(Date.now() / 1000));

// get methods in dateh
let anotherDate = new Date()
console.log(anotherDate.getDate());
console.log(anotherDate.getDay());
console.log(anotherDate.getFullYear());


// use object in date


let formattedDate = anotherDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric"
});
console.log(formattedDate);

