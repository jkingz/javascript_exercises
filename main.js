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

// Array - variables that holds multiple values

const fruits = ["apple", "mango", "oranges"];

fruits[3] = "grapes"; // adding fruit in index 3 using array index

fruits.push("pears"); // adding fruit in the index 4 using array prototype .push

fruits.unshift("strawberries"); // adding fruit in the index 0 using array prototype .unshift

// Object literals
const person = {
  fname: "king",
  sex: "male",
  hobbies: ["music", "games", "programming"],
  address: {
    street: "street st.",
    block: "3rd",
    city: "city"
  }
};
console.table([person.fname, person.sex]);
console.group("person");
console.log(person);
console.groupEnd;
console.group("address");
console.log(person.address);
console.groupEnd;

//destructuring es6 feature
const { fname, sex } = person;
console.group();
console.log(fname);

// Arrays of objects
const todos = [
  {
    id: 1,
    text: "Meet me somewhere",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: false
  },
  {
    id: 3,
    text: "Interview success",
    isCompleted: true
  }
];
console.log(todos[2].text);

// Format arrays of object to JSON
const todoJSON = JSON.stringify(todos);
console.group("JSON");
console.log(todoJSON);

// high order array method
// map, filter, reduce, foreach
todos.forEach(function(todo) {
  console.log(todo.text);
});

// map is returning array
const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todoText);

// filter return arrays of objects
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted);

// filtering todo that is complete
// then mapping thru each is completed todo text
const todoTextIsCompleted = todos
  .filter(function(todo) {
    return todo.isCompleted === true;
  })
  .map(function(todo) {
    return todo.text;
  });
console.log(todoTextIsCompleted);

// ternary operator sample
const x = 1;

const color = x > 10 ? "red" : "blue";
console.log(color);

const color1 = "green";

// switch case
switch (color1) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

// Functions and es6 arrow function

function addNums(num1, num2) {
  return num1 + num2;
}
console.log(addNums(5, 4));

// implicit return arrow function
const addNumbers = (num6, num7) => num6 / num7;
console.log(addNumbers(9, 3));

// explicit return arrow function
// surrounded by curlies are the to get statement
// or multiple statements or expression
const addNumber = (num3, num4) => {
  return num3 * num4;
};
console.log(addNumber(6, 7));

// OOP in es5
// Constructive/Constructor function prototypes
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);

  //create methods inside the function itself
  //   this.getBirthYear = function() {
  //     return this.dob.getFullYear();
  //   };
  //   this.getFullName = function() {
  //     //template literal
  //     return `${this.firstName} ${this.lastName}`;
  //   };
}

// using prototype
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Instantiate an object
const person1 = new Person("John", "King", "10/27/2019");
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// es6 classes syntactic sugar prettier way
// Class
class Bicycle {
  constructor(body, pedal, chain, sprocket) {
    this.body = body;
    this.pedal = pedal;
    this.chain = chain;
  }
  // class method
  getFullBike() {
    return `${this.body} ${this.pedal} ${this.chain}`;
  }
}

// Instantiate an object
const bicycle = new Bicycle("Alloy", "two", "large");
console.log(bicycle);
console.log(bicycle.getFullBike());
