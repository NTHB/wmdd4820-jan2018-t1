// Gianlucci Badiali Minarelli
// Yukako Suzuki

// --------------------------------------------------------------------

// 1. Write a function that takes any number, but always returns 0.

// --------------------------------------------------------------------

function zero (number) {
  return 0;
}

// --------------------------------------------------------------------

// 2. Write a function that takes a user object with 'name' and 'age' properties, and logs the string "[name] is [age] years old."

// --------------------------------------------------------------------

function logProfile (userObject) {
  console.log(`${userObject.name} is ${userObject.age} years old.`);
}

const myObjectGi = {
  name: "Gianlucci",
  age: 12
},

// When declaring multiple variables of the same type (const, let, var) you can simply separate the list of variable names with a comma instead of writing each declaration statement individually.

myObjectYu = {
  name: "Yukako",
  age: 12
};

logProfile(myObjectGi);
logProfile(myObjectYu);

// --------------------------------------------------------------------

// 3. Write a function that takes a sentence, and returns an object of all the words and their lengths.

// --------------------------------------------------------------------

// The traditional solution:
function wordsLength (sentence) {
  const words = sentence.split(" "),
  // Ideally, we would have to check if all the elements in our "words" array really are words (and not, for example, punctuation, symbols or even the empty string '').
  resultObj = {};
  // Remember: "resultObj" being a "const" variable only means that the name "resultObj" will always reference the same object stored in memory (the "{}" we initialized the variable with), it doesn't mean, however, the value itself (in this case, the object "{}") can't be changed.
  for (let i = 0; i < words.length; i++) {
    resultObj[words[i]] = words[i].length;
  }
  return resultObj;
}

// The fancy loop:
function wordsLength_ (sentence) {
  const words = sentence.split(" "),
  resultObj = {};
  for (const [index, e] of words.entries()) {
    resultObj[words[index]] = e.length;
  }
  return resultObj;
}

// To undestand what happened on the fancy loop:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring

console.log(wordsLength("Hell o world"));
console.log(wordsLength_("Hello wor l d"));

// --------------------------------------------------------------------

// 4. Create a function, keys, that takes an object and returns an array of all its keys.

// --------------------------------------------------------------------

// "Keys" here is a different way to say "names" (or "property names"). That being said, not every property key is a "name" (that is, something that is or will be converted to a string). Some property keys are also "symbols", which is a different (and new) javascript primitive type introduced with ES6.
//
// For more information on symbols and the new terminology:
//
// http://exploringjs.com/es6/ch_symbols.html#sec_primitive-type-symbol

function keys (inputObj) {
  let inputKeys = [];
  for (const propName in inputObj) {
    inputKeys.push(propName);
  }
  return inputKeys;
}

console.log(keys({a: 1, b: 2, c: 3}));

// --------------------------------------------------------------------

// 5. Create a function, values, that takes an object and returns an array of all its values.

// --------------------------------------------------------------------

function values (inputObj) {
  let inputValues = [];
  for (const propName in inputObj) {
    inputValues.push(inputObj[propName]);
  }
  return inputValues;
}

console.log(values({a: 1, b: 2, c: 3}));
