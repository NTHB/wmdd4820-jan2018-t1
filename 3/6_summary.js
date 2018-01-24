// summary
// make an array of products
let shoppingCart = ["shorts", "tank top", "sunscreen"];

// database
let shoppingCart = [
  ["shorts"],
  ["tank top"],
  ["sunscreen"]
];

// product names, price, in stock, quantity <- fields in our database
let shoppingCart = [
  ["shorts", 20.00, true, 2], // <- records in our db
  ["tank top", 10.00, true, 3],
  ["sunscreen", 5.00, false, 4]
];

// object based
let shoppingCart = [ {}, {}, {} ];
let shoppingCart = [
{
  productName: "shorts",
  price: 20.00,
  inStock: true,
  quantity: 2
},
{
  productName: "tank top",
  price: 10.00,
  inStock: true,
  quantity: 3
},
{
  productName: "sunscreen",
  price: 5.00,
  inStock: false,
  quantity: 4
}
];

// the total cost of my shopping cart
// price * quantity for each object
// sum of those values
// total: $90 if we are not considering products in stock
// total: $70 if we are considering products in stock

// pseudo code
// 1. look at each object, check it's price and multiply that by the quantity desired
// 2. if the instock boolean is false, ignore that item when calculating the total

// javascript
// 1. how do we iterate over an array?
// for .. of array
// for .. in object
let total = 0;

for (let item of shoppingCart) {
  // item is going to be object data type
  // console.log( typeof item ); // object
  // how do i iterate over an object?
  for (let property in item) {
    console.log(`property: ${ property }`);
    console.log(`value: ${ item[ property ] }`);
    if (item.inStock) {
      if (property == "price") {
        total += item[ property ] * item.quantity;
      }
    }
  }
  console.log("--");
}

console.log(`The total is ${ total }`);



// truthy
// 0, undefined, null, ""
let inStock = true;

if (inStock) {
  console.log("inside");
}

inStock ? console.log("inside") : false;

//
