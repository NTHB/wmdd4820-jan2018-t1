// Assignment: [Lab] Simple Substitution Cipher Helper
//
// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.
//
// You will need to create a SubstitutionCipher constructor.
//
// The SubstitutionCipher will have at least two prototype methods: .encode and .decode
//
// Think about where you will store the alphabet and the alternate alphabet.
//
// The following are examples of how your solution should work:
//
// let abc1 = "abcdefghijklmnopqrstuvwxyz";
// let abc2 = "etaoinshrdlucmfwypvbgkjqxz";
//
// const sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
//
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"
//
// If a character provided is not in the opposing alphabet, simply leave it as be.
//
// Stretch
//
// Redo this exercise with Javascript classes.

class SubstitutionCipher {
  constructor (alpha, altAlpha) {
    this.alpha = alpha.split('');
    this.altAlpha = altAlpha.split('');
  }
  encode (alphaStr) {
    let alphaIndex = alphaStr.split('').map((e) => this.alpha.indexOf(e));
    return alphaIndex.map((e) => this.altAlpha[e]).join('');
  }
  decode (altAlphaStr) {
    let altAlphaIndex = altAlphaStr.split('').map((e) => this.altAlpha.indexOf(e));
    return altAlphaIndex.map((e) => this.alpha[e]).join('');
  }
}

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);

console.log('Encoding:');
console.log(sub.encode("abc")); // => "eta"
console.log(sub.encode("xyz")); // => "qxz"
console.log(sub.encode("aeiou")); // => "eirfg"
console.log('\nDecoding:');
console.log(sub.decode("eta")); // => "abc"
console.log(sub.decode("qxz")); // => "xyz"
console.log(sub.decode("eirfg")); // => "aeiou"

// Assignment: [Lab] A More OO Counter
//
// Implement a version of the counter that we created in class as either a function constructor or a class. Make sure to define its methods on the prototype.
//
// It should support the following methods:
//
//     .set
//     .inc
//     .dec
//     .show
//     .setStep
//     .reset
//
// Example usage:
//
// const sushiEatenCounter = new Counter(3, 1);
// sushiEatenCounter.inc(); // returns 4
// sushiEatenCounter.inc(); // returns 5
// sushiEatenCounter.inc(); // returns 6
// sushiEatenCounter.show(); // returns 6
//
// const bunnyCounter = new Counter();
// bunnyCounter.show() // return 0
// bunnyCounter.set(10);
// bunnyCounter.setStep(10);
// bunnyCounter.inc(); // return 20
// bunnyCounter.inc(); // return 30
//
// Stretch
//
// If you built it as a class, build it as a constructor with prototype. Vice versa.

class Counter {
  constructor (value = 0, step = 0) {
    this.value = value;
    this.step = step;
  }
  set (newValue) {
    this.value = newValue;
  }
  inc () {
    this.value += this.step;
    return this.show();
  }
  dec () {
    this.value -= this.step;
    return this.show();
  }
  show () {
    return this.value;
  }
  setStep (newStep) {
    this.step = newStep;
  }
  reset () {
    this.set(0);
  }
}

const sushiEatenCounter = new Counter(3, 1);
console.log(sushiEatenCounter.inc()); // returns 4
console.log(sushiEatenCounter.inc()); // returns 5
console.log(sushiEatenCounter.inc()); // returns 6
console.log(sushiEatenCounter.show()); // returns 6

const bunnyCounter = new Counter();
console.log(bunnyCounter.show()); // return 0
console.log(bunnyCounter.set(10));
console.log(bunnyCounter.setStep(10));
console.log(bunnyCounter.inc()); // return 20
console.log(bunnyCounter.inc()); // return 30

// Assignment: [Lab] Implement Find
//
// Write an higher-order function, find, from scratch that takes two arguments:
//
//     the first is an array
//     the second is a callback that will be called once for every element in the array with 3 arguments:
//         the current value of the element
//         the current index of the element
//         the array itself
//
// find returns a the first element in the array for which the callback (or, second argument) returns true.
//
// Usage examples:
//
// // given three functions:
// // even returns true if its argument, n, is an even number (false otherwise)
// const even = function (n) { return n % 2 === 0 };
// // even returns true if its argument, n, is an odd number (false otherwise)
// const odd = function (n) { return !even(n) };
//
// // creates a function that returns true if its argument is above min
// const above = function (min) {
//   return function (n) {
//     return n > min;
//   }
// }
//
// let arr = [1,2,3,4,5,6];
//
// find(arr, even) // returns 2
// find(arr, odd) // returns 1
// find(arr, above(3)) // returns 4
//
// find(
//   arr,
//   function (value, index, arr) { return value % 5 === 0 }
// ) // returns 5 (or, the first multiple of 5)

const find = (inputArray, callbackFunction) => {
  for (const [index, e] of inputArray.entries()) {
    if (callbackFunction(e, index, inputArray)) {
      return e;
    }
  }
};

// Array:

const arr = [1, 2, 3, 4, 5, 6];

// Callbacks:

const even = (num) => (num % 2 === 0);
const odd = (num) => (num % 2 === 1);
const above = (min) => ((num) => num > min);

// Testing "find":

console.log(find(arr, even)); // returns 2.
console.log(find(arr, odd)); // returns 1.
console.log(find(arr, above(3))); // returns 4.
console.log(find(arr, (value, index, arr) => (value % 5 === 0))); // returns 5 (or, the first multiple of 5).
