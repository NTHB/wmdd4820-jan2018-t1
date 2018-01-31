// function - takes an input returns an output, a list of instructions tied to name
// object - properties and behaviours
// classes - template, describes the object

// declaritive function, global name space
function add() {}

// expressive function, we can control scope
let add = function() {};

// take in arguments, higher order functions....

// objects initializer
const me = {
  name: "jacob",
  age: 39
};
// object constructor
const me = new Object();
me.name;
me['name'];

let property = "name";
me[property];

// how do we iterate over an object
for (let property of me) {}

// class?
class Person {}
class House {}
class Array {}
class Object {}
class Window {}
class Document {}


class Person {
  // constructor method
  constructor() {
    console.log("Inside the constructor")
    this.name = "Jacob";
    this.age = 39;
  }
}

const me1 = new Person();
const me2 = new Person();
const me3 = new Person();
const me4 = new Person();
const me5 = new Person();
const me6 = new Person();

// object
const person1 = {
  name: "Jacob",
  age: 39
}

const person2 = {
  name: "Jacob",
  age: 39
}

const person3 = {
  name: "Jacob",
  age: 39
}








//









//
