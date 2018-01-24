// performant
console.time('while');
let now = new Date();

let counter = 0;

while(counter<10000) {
  console.log(counter);
  counter++;
}

let result = console.timeEnd('while');
let later = new Date();


// which loop is the efficient?
// while, for, do while?

// which is the most efficient when counting backwards, decrementing loop
