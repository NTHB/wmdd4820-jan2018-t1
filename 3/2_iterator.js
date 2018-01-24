// iterator
//
// iterate over an array
// for loop (i = 0...)
// for ( of )

let shoppingCart = ["toothbrush", "gel", "cologne", "ring", "tux"];

for (let item of shoppingCart) {
  console.log( item );
}

// for (init; condition; iterator) {}
for (let i=0; i<shoppingCart.length; i++) {
  console.log(i);
  console.log( shoppingCart[ i ] );
}


// iterate over an object
// for..in
// for (let property of object)
// print out all the properties of our car to the console
const car = {
  make: "Ford",
  model: "Mustang GT",
  year: 2018
};

for (let attribute in car) {
  console.log(`attribute: ${attribute}`);
  console.log(`value: ${car[ attribute ]}`); // returns the corresponding value to your property (property name stored in the attribute variable)
  console.log('--');
}


let car = {};
car[ "year" ] = 2018;

let customProperty = "year";
car[ customProperty ] = 2018;




//
