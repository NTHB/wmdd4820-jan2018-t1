// objects
const bread = {
  // property: values
  colour: "brown",
  weight: 100,
  price: 3,
  // functionality: method
  bake: function() { console.log("baking bread") },
  eat: function() {
    console.log("slide bread");
    console.log("butter bread");
    console.log("eat bread");
  }
  // sell:
  // slice:
  // butter:
};

// make a car that has: make, model, and capacity
// add to that car the ability to: drive, park and stop
// const car = new Object(); // object constructor
const car = {
  // property: value
  make: "Tesla",
  model: "Model S P100 D",
  capacity: 5,
  // methods:
  // remove the ": function"
  drive: function(){ console.log("I am driving") },
  park() { console.log("I am parking") },
  stop() { console.log("I am stopping") }
}; // object initializer

car.make; // "Tesla"
car.model; // "Model S P100 D"
car.capacity; // 5
car.drive; //  [Function] - being passed by reference
car.drive(); //  adding (); executes the function

function sayHello() {
  console.log("hi");
}

sayHello; // [Function]
sayHello();

let shoppingList = new Array();
shoppingList.push("beer"); // push method on our array object
shoppingList.length; // length is a property of our array object

{
  0: "beer",
  length: 1,
  push: function() { /* adds an item to the end of our list */ }
}






//
