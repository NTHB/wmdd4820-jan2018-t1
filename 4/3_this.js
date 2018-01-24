// this  - where am i, and who called me?
// let speed = 10;
const car1 = {
  speed: 10,
  drive() { console.log(`I am driving at ${ this.speed }km/h`)}
};

car1.drive();

const car2 = {
  speed: 10,
  drive() { console.log(`I am driving at ${ car2.speed }km/h`)}
};

const car3 = {
  speed: 10,
  drive() { console.log(`I am driving at ${ car3.speed }km/h`)}
};
