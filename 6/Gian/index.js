// Gianlucci Badiali Minarelli

// Assignment: [lab] Timing Functions
//
// Change your page script to write to the page "Loading..." and then, 3 seconds later, "Hello, World!"

console.log('Loading...');

setTimeout (function(){
  console.log('Hello, World!');
}, 3000);

// Stretch: Make your page display "Ready...", then "Set...", then "Go!", one second after another.
//

setTimeout (function(){
  console.log('Ready...');
}, 5000);

setTimeout (function(){
  console.log('Set...');
}, 6000);

setTimeout (function(){
  console.log('Go!');
}, 7000);

//
// Make a counter using setInterval. Count from 1 up, every second.

let counter = 1;
setInterval(function(){
  console.log(counter);
  // counter = counter + 1;
  // counter += 1;
  counter++;
}, 1000);

//
// Stretch: Create two counters, one for even numbers and one for odd. Run them at the same time.

let counterOdd = 1;
let counterEven = 2;

setInterval(function(){
  console.log(counterOdd);
  counterOdd += 2;
}, 1000);

setInterval(function(){
  console.log(counterEven);
  counterEven += 2;
}, 1000);

//
// Use setInterval to log '.' to the screen every 1 second. Stop after 10 seconds have passed.
//
// (Hint: Use setTimeout to stop things after 10 seconds)

let counter = 0;

let id = setInterval (function() {
  if (counter < 10) {
    console.log('.');
    counter++;
  } else {
    clearInterval(id);
  }
}, 1000);

//
// Stretch: Build a blast-off countdown using setInterval.

//
// 10 9 8 7 6 5 4 3 2 1 Blast Off!

let counter = 10;

let id = setInterval (function() {
  if (counter > 0) {
    console.log(counter);
    counter--;
  } else {
    console.log('Blast Off!');
    clearInterval(id);
  }
}, 1000);

// Assignment: [lab] Higher-Order Functions
//
// Write a function named "call" which takes a number and two functions as parameters, and returns the result of calling the two functions on the number.
//
//
// const doubleIt = function (x) {
//
// return 2 * x;
//
// }

//
// const addOne = function(x) {
//
//  return x + 1;
//
// }

//
// // Write a function so you can use:
//
// call(5, doubleIt, addOne); // => 11

 function doubleInt (number) {
   return 2 * number;
 }

 function addOne (number) {
   return number + 1;
 }

function call (number, function1, function2) {
  return function2(function1(number));
}

call (5, doubleInt, addOne);

// Assignment: Decaying Count
// Write some code that writes "1" to the console, then 1 second later writes "2" to the console, then 2 seconds after that writes "3" to the console, ..., until it gets to "10".``

const logInterval = (interval) => {
 setTimeout(() => {
    console.log(interval);
    if (interval < 10) {
      logInterval(interval + 1);
    } else {
      clearTimeout(dotID);
    }
  }, (interval - 1) * 1000);
};

// Checking the interval
const dotID = setInterval(() => {
  console.log('.');
}, 1000);

logInterval(1);


// Assignment: [Lab] Higher-Order Function Utilities
// Woofer Inc. has decided to reinvent the wheel. It's tired of all the libraries out there and would rather implement their own. You are tasked to build part of their function utilities.
// Build the following higher-order functions using the concepts you've learned today:
// after creates a function that calls its callback only once its been called n time.
// before creates a function that calls its callback only n times. Example Usage:
// const add = function (a, b) { return a + b};
// add(1,1) // returns 2
// add(1,3) // returns 4
// add(2,3) // returns 5
// // after usage example
// const addAfter3Tries = function(number1, number2) {...};
// addAfter3Tries(4, 5); // returns undefined
// addAfter3Tries(4, 2); // returns undefined
// addAfter3Tries(1, 6); // returns undefined
// addAfter3Tries(5, 5); // returns 10 (add is only allowed to return now)
// addAfter3Tries(1, 5); // returns 6
// // before usage example
// const only3Times = function(number1, number2, fn) {...};
// only3Times(4, 5, add) // returns 9
// only3Times(4, 2, add) // returns 6
// only3Times(1, 6, add) // returns 7
// only3Times(5, 5, add) // returns undefined (no more calls to add allowed)
// only3Times(9, 9, add) // returns undefined

const add = (a, b) => (a + b);

const after = (func, num) => {
  let counter = 0;
  return (...args) => {
    if (counter === num) {
      return func(...args);
    } else {
      counter++;
      return undefined;
    }
  };
};

// Had to make the func the first argument of the returned function because of the rest paramenter.
const before = (num) => {
  let counter = 0;
  return (func, ...args) => {
    if (counter < num) {
      counter++;
      return func(...args);
    } else {
      return undefined;
    }
  };
};

const addAfter3Tries = after(add, 3);
const only3Times = before(3);

console.log(`"After" results:
${addAfter3Tries(4, 5)} // returns undefined
${addAfter3Tries(4, 2)} // returns undefined
${addAfter3Tries(1, 6)} // returns undefined
${addAfter3Tries(5, 5)} // returns 10 (add is only allowed to return now)
${addAfter3Tries(1, 5)} // returns 6

"Before" results:
${only3Times(add, 4, 5)} // returns 9
${only3Times(add, 4, 2)} // returns 6
${only3Times(add, 1, 6)} // returns 7
${only3Times(add, 5, 5)} // returns undefined (no more calls to add allowed)
${only3Times(add, 9, 9)} // returns undefined
`);
