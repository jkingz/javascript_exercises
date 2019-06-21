// assigning variables using let & const

let age1 = 27; // << the value of this can be change
const age2 = 30; // << this is a constant value. it can never be change
console.log(age1, age2, "ages");

// String, Number, Boolean, null, undefined
const name = "jon";
const age = "20";
const a = 12;
const b = true;
const c = undefined;
let z;

// Concatenation the old way
console.log("My name is" + name + " and I am " + age);

// ES6 Template String
console.log(`My name is ${name} and I am ${age}`);

const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// Using javascript string methods
// .split .join and many more
const s = "Hello World!";
const king = "jkingz koyz";
console.log(s.length, "s length");
console.log(s.toUpperCase());
console.log(king.split(""));
