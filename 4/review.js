// what is a method?
// what is a function expression?
// what is a function declaration?
// what is a shared function?
// what is a class?

// problem solving
// candle, match, tack box problem

// javascript
// ECMAScript 6.0
let
var
const

Math.PI + 3.2;
Math.random();

"Hello";
'Goodbye'
`Salut`;
// string interpolation
let something = 10;
something = "Love";
something = ["A", "B", "C"];

`All you need is ${ something }`;

// logic gating
// iterators
if (false) {
  console.log("inside!");
}

(5 > 6); // false
("a" < "b"); // true

let age = 39;

if (age > 30) {
  console.log("old");
} else if (age > 20) {
  console.log("almost old");
} else {
  console.log("old");
}

// iterators
// while()
// for()
// for(of)
// for(in)
// do while()
// for (init; condition; increment/dec)
for (let counter=0; counter<100; counter++) {
  console.log( counter );
}

// functions
function morning() {
  console.log("wake up");
  console.log("snooze");
  console.log("eat breakfast");
  console.log("transit");
  console.log("study");
}

morning();
morning();
morning();
morning();

// console.log("wake up");
//
// console.log("eat breakfast");
// console.log("transit");
// console.log("study");
// console.log("wake up");
//
// console.log("eat breakfast");
// console.log("transit");
// console.log("study");
// console.log("wake up");
//
// console.log("eat breakfast");
// console.log("transit");
// console.log("study");
// console.log("wake up");
//
// console.log("eat breakfast");
// console.log("transit");
// console.log("study");

// data structures
// hashes
// election
"hello"; // which letter occurs most often
// h
// e
// ll <-
// o

// split the string so we can analyze each individual letter
"hello".split(); // [ 'hello' ]
"hello".split(""); //  [ 'h', 'e', 'l', 'l', 'o' ]

"hello"[3];

let word = "hello";

for (let i=0; i<word.length; i++) {
  word[i];
}

let word = "hello";
let chars = word.split("");
// const me = {
//   name: "Jacob"
// };
//
// const shoppingList = {
//   0: "shoes"
// };

// hashing
// before:
const results = {};

// results.age = 39;
// results[ "age "] = 39;
// let property = "age";
// results[ property ] = 39;

for (let char of chars) {
  if (results[ char ] == undefined) {
    results[ char ] = 1;
  } else {
    results[ char ] += 1;
  }
}


// functions with objects
function greet() {
  console.log("hi");
}

greet(); // "hi"

function greet( name ) {
  console.log(`hi ${ name }`);
}

greet("jacob") // "hi jacob"

function greet(obj) {
  consol.log(`hi ${obj.name}`);
}

const jacob = {
  name: "jay",
  age: 39
};

greet(jacob)

// key values from an object
// make a function that pulls out all the keys/properties of an object
function displayKeys(obj) {
  let results = [];

  if (typeof obj == "object") {
    for (let property in obj) {
      console.log( property );
      results.push( property );
    }
  }

  return results;
}

function displayValues(obj) {
  let results = [];
  for (let property in obj) {
    console.log( obj[ property ] );
    results.push( obj[ property ] );
  }

  return results;
}




// after:
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
};



// scope
{
  let me = {};


  {
    let you = {};
    console.log(me); // yes
    // console.log(you); // yes
  }

  console.log(me); // yes
  // console.log(you); // no


}



//


//
