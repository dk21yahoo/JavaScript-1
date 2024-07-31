// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Aalu');


( (value1, value2) => {
    console.log(value1 + value2);

})(5,6);

(function threeValue(value1, value2, value3) {
    console.log(value1 + value2 + value3)
})(1, 2, 3);