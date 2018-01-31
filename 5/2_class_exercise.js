// lets make a car class, so we can produce lots of car objects, like a factory!!!
// gigafactory :)

  class Car {
    constructor(colour, capacity, ac=true) {
      // instance variables
      // properties
      this.colour = colour;
      this.capacity = capacity;
      this.ac = ac;
      // this.drive = function() {}; // not the best way to do it
    }
    setSeatColour( colour ) { this.colour = colour }
    drive() { console.log("Driving") }
    park() { console.log("Parking") }
    stop() { console.log("Stopping") }
  }

  // construct a car, construct an instance of the Car class
  const tesla = new Car("black", 5, true);
  tesla.drive();
  tesla.park();
  tesla.stop();


const ford = new Car("yellow", 4, true);
const porsche = new Car("red", 2, true);
const maserati = new Car("white", 2, true);



// let shoppingList = new Array();
// let shoppingList = [];
const mario = {
  name: "Mario",
  age: 40,
  profession: "plumber",
  // methods
  jump(){},
  run(){}
};








//
