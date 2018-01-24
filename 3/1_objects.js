// objects - an entity
// object - a type of data structure
// object - a user-based data structure

// object in our world are described using our senses
// car object:
// colour
// make and model
// mileage
// license plate number
// weight
// year
// cost
// engine

// we use const because we want the memory location for our object to not change
const car = new Object(); // object constructor
const car = {}; // object initializer

const PI = 3.14159;

const car = {
  // property: value
  colour: "blue",
  make: "Chevy",
  model: "Corvette",
  mileage: 1004,
  license: "238 JKL",
  weight: 1600,
  year: 2018,
  cost: 80000,
  engine: true
};

// dot operator
// ${} string interpolation
// getter
console.log(`The car is a ${ car.make } ${ car.model }`);
console.log(`The car's year is ${ car.year }`);
console.log(`The car's colour is ${ car.colour }`);

car.colour = "yellow"; // setter
console.log(`The car's colour is ${ car.colour }`);

// car[0]; // undefined
car["colour"]; // "yellow"
car["engine"]; // true
car["cost"]; // 800000

// car[0] = "Something";
// car[1] = "Something else";

// an array is an object


//
// car[ expression ];
// expression
// statement
5 + 5; // produces an output
if (true) {} // doesn't produce a direct output

// 1. dot operator
car.year;
// 2. square brakets
car["year"];
// 3. variable
let propertyName = "year";
car[ propertyName ];







//
