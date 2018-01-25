// Gianlucci Badiali Minarelli

// --------------------------------------------------------------------

// 1. Assignment: Large or Small City
//
// bc_cities_population = {vancouver: 2135201, victoria:  316327, abbotsford: 149855, kelowna: 141767, nanaimo:  88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }
//
// Write a method that takes the hash and prints if city is large (more than 100,000) or small (otherwise). Printing something like: Vancouver is a large city

// --------------------------------------------------------------------

// I'm assuming here "method = function" (and not that we are supposed to create a "method" as in the property of an object with a function as its value).

const logCitySize  = cities => {
  // This type of function is called an "arrow function". It is a shorter type of function expression introduced with ES6. For more on arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  for (const city in cities) {
    console.log(`${city} is a ${cities[city] > 100000 ? 'large' : 'small'} city.`);
    // Remember: the conditional ternary operator works like this:
    // [condition] ? [if condition is true] : [if condition is false];
    // More on the ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  }
};

logCitySize({vancouver: 2135201, victoria:  316327, abbotsford: 149855, kelowna: 141767, nanaimo:  88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382});

// --------------------------------------------------------------------

// 2. Most recurring letter
//
// Find the most recurring letter in a given string from the user.

// --------------------------------------------------------------------

// The traditional solution:
const mostRecurringLetter = inputString => {
  const chars = {}, result = {
    value: 0,
    letters: []
  };
  for (const char of inputString.toLowerCase()) {
    if (chars[char]) {
      chars[char]++;
    } else if (/[a-z]/.test(char)) {
      // Here I'm checking if the character really is a letter using something called "regular expression". More information on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      chars[char] = 1;
    }
    if (chars[char] > result.value) {
      result.value = chars[char];
      result.letters = [char];
    } else if (chars[char] === result.value) {
      result.letters = [...result.letters, char];
      // Here I'm using something called the "spread operator" to quickly concatenate two arrays ("result.letters" and "char") into one (the updated "result.letters"). For more information on the spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    }
  }
  return result;
};

// The 'what is even happening here anymore' solution:
//
// Warning: this solution has little to no didactic value, but feel free to try and understand the conditional chain. To understand what was done, check:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

const mostRecurringLetter_ = inputString => {
  const chars = {}, result = {
    value: 0,
    letters: []
  };
  for (const char of inputString.toLowerCase()) {
    /[a-z]/.test(char) ? chars[char] = (chars[char] ? chars[char] + 1 : 1) : null;
    [result.value = result.value, result.letters = result.letters] = chars[char] > result.value ? [chars[char], [char]] : chars[char] === result.value ? [, [...result.letters, char]] : [];
  }
  return result;
};

console.log(mostRecurringLetter('        HelLO world!!!!'));
console.log(mostRecurringLetter('Heeelloo world!'));
console.log(mostRecurringLetter_('        HelLO world!!!!'));
console.log(mostRecurringLetter_('Heeelloo world!'));

// --------------------------------------------------------------------

// 3. Frequency of numbers
//
// Given an array of number such as:
//
// array = [1,2,3,4,4,4,2,3,3,3]
//
// Write a piece of code that will generate a hash of frequencies that looks like:
//
// {1: 1, 2: 2, 3: 4, 4: 3}

// --------------------------------------------------------------------

const frequencyOf = inputArray => {
  const outputHash = {};
  for (const e of inputArray) {
    outputHash[e] = outputHash[e] ? outputHash[e] + 1 : 1;
  }
  return outputHash;
};

console.log(frequencyOf([1,2,3,4,4,4,2,3,3,3]));

// --------------------------------------------------------------------

// 4.Implement Pluck function
//
// Implement a `pluck` function, which takes an array of hashes and a key name, and returns an array containing the values for each named key in the hash.
//
// For example:
//
// pluck([{a:1}, {a:2}], :a)  ## returns [1,2]
//
// pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
//
// pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]
//
// If an hash is missing the property, you should just leave it as null in the output array.
//
// http://www.codewars.com/dojo/katas/530017aac7c0f49926000084

// --------------------------------------------------------------------

// On the instructions it is said that if a hash is missing, we "should just leave it as null". The default value type of a missing property is "undefined", though. I'm 99% sure that's what the instructions meant, but I'm forcing the requested "null" return anyways.

// To be fancy and solve the problem in one line I had to use the "map" method. Check: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const pluck = (arrayOfHashes, pluckKey) => arrayOfHashes.map(e => e[pluckKey] ? e[pluckKey] : null);

console.log(pluck([{a: 1}, {a: 2}], 'a'));
console.log(pluck([{b: 2}, {a: 4, b: 4}, {a: 1}, {c: 4}], 'a'));
console.log(pluck([{b: 2}, {a: 4, b: 4}, {a: 1}, {c: 4}], 'b'));

// --------------------------------------------------------------------

// 5. Find the repeated number
//
// You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory?
//
// Bonus: Solve it in two ways: one using hashes and one without.

// --------------------------------------------------------------------

// I'm not sure I understand the instructions. I'm gonna assume we need a function that receives something like [3, 57, 9987, 560, 999954, 2, 57, 48] and needs to return '57'. I'm also going to assume, at least for one of the solutions, that there is only one repeated number and that it only appears twice. The second function is way more scalable and covers different conditions/use cases (multiple numbers repeated two or more times).

// No hashes and very case-specific:
const findDoubleInt = inputArray => {
  for (const [index, e] of inputArray.entries()) {
    if (inputArray.includes(e, index + 1)) {
      return e;
    }
  }
};

// Using hashes and very flexible:
const findMultipleInt = inputArray => {
  const intHash = {}, multipleInt = {};
  for (const e of inputArray) {
    if (intHash[e]) {
      intHash[e]++;
      multipleInt[e] = intHash[e];
    } else {
      intHash[e] = 1;
    }
  }
  return multipleInt;
};

console.log(findDoubleInt([3, 57, 9987, 560, 999954, 2, 57, 48]));
console.log(findMultipleInt([3, 57, 9987, 560, 999954, 2, 57, 48]));
console.log(findMultipleInt([3, 57, 9987, 560, 999954, 2, 57, 48, 3, 3, 9987, 2, 1, 1]));

// --------------------------------------------------------------------

// 6.  Combine keys and values
//
// Given a hash:
//
// {:a => "123", :b => "345", :c => "678", :d => "910"}
//
// Write a code that generates an array that combines the keys and values so that the resulting array should be:
//
// ["a123", "b345", "c678", "d910"]

// --------------------------------------------------------------------

// The traditional way:
const concatHash = inputHash => {
  let outputArray = [];
  for (const e in inputHash) {
    outputArray.push(e.concat(inputHash[e]));
  }
  return outputArray;
};

// One line:
const concatHash_ = inputHash => Object.keys(inputHash).map(e => e.concat(inputHash[e]));

// "Object.keys([object])" returns an array of the object's (own and enumerable) keys. Using Object.keys() with the map method is kind of a hack to iterate over an object without using the "for...in" loop (or doing some more advenced stuff like setting up a Symbol.iterator property on you object so it can be iterated over using the typical for...of loop, but you REALLY shouldn't mind this at this point). More on Object.keys(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

console.log(concatHash({a: '123', b: '345', c: '678', d: '910'}));
console.log(concatHash_({a: '123', b: '345', c: '678', d: '910'}));

// --------------------------------------------------------------------

// 7.  Array from Hash
//
// bc_cities_population = {vancouver: 2135201, victoria: 316327, abbotsford: 149855, kelowna: 141767, nanaimo: 88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }
//
// Write a method that takes the hash above and returns an array of the values divided by a 1000 in one line of code.

// --------------------------------------------------------------------

const popBy1K = inputHash => Object.keys(inputHash).map(e => (inputHash[e] / 1000));

console.log(popBy1K({vancouver: 2135201, victoria: 316327, abbotsford: 149855, kelowna: 141767, nanaimo: 88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382}));

// --------------------------------------------------------------------

// 8.  Factorial method
//
// Write a function factorial that takes one argument and returns the factorial value of that number. In math, factorial for a number n is the product of the numbers from 1 to the number n. For instance, factorial for 5 will be: 5 * 4 * 3 * 2 * 1.

// --------------------------------------------------------------------

// I'm not worring about catching errors here, just returning 'null' if the input is not valid.

const getFactorial = inputInt => {
  if (Number.isInteger(inputInt) && inputInt >= 0) {
    return inputInt === 0 ? 1 : (inputInt * getFactorial(inputInt - 1));
  } else {
    return null;
  }
}

// Here, "getFactorial" is what we call a "recursive function", very characteristic of the functional programming paradigm. Check: http://dev.bennage.com/blog/2010/09/14/what-is-functional-programming-part-3-recursion/

console.log(getFactorial(3));
console.log(getFactorial(5));
console.log(getFactorial(0));
console.log(getFactorial(-1));
console.log(getFactorial('3'));
