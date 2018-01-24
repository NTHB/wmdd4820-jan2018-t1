// cookies
// make a cookie object
// give it 3 properties:  sugar, flour, glutten boolean
// give it 3 values:  20, 10, false

// use an for in iterator to display all the values in our object out to the console
const cookie = new Object();
cookie.sugar = 20;
cookie.flour = 10;
cookie.glutten = false;

const cookie = {
  sugar: 20,
  flour: 10,
  glutten: false,
  ingredients: ["milk", "eggs", "butter"]
};

// JSON - javascript object notation
// + complexity to our objects
// what is the first ingredient in your cookie?
cookie.ingredients[0];

// + more complexity
const cookie = {
  sugar: 20,
  flour: 10,
  glutten: false,
  ingredients: ["milk", "eggs", "butter"],
  chocolateChip: { colour: "brown", sugar: 30 }
};

// what is the colour of our chocolate chips?
console.log( cookie.chocolateChip.colour );

const shoe = {
  img: "shoe.jpg",
  price: 240,
  name: "Jordans",
  altColours: ["blue", "black"]
};



//
