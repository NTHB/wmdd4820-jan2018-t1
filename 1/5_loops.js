// count from 1 to 10
// brute force method
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;

// count from 1 to 1,000,000
// loops
let counter = 1;
// counter = 2;
// counter = 3;
counter = counter + 1; // 2
counter = counter + 1; // 3
counter = counter + 1; // 4
counter = counter + 1; // 5
counter = counter + 1; // 6

counter += 1; // += operand
counter++; // ++ operand

// while loop
let counter = 1;

while (counter<100000) {
  console.log(counter);
  counter++;
}

// infinite loop
let counter = 0;
while (counter < 10) {
  console.log("Hello");
}

// fixed
let counter = 0;
while (counter < 100) {
  console.log(`${counter}: Hello`);
  counter++;
}

// for
// do..while

// for (init; condition; increment) {}
for (let counter = 0; counter < 100; counter++) {
  console.log(`${counter}: Hello`);
}

let counter = 10;
counter--; // 9
counter-= 1; // 9

// countdown to new years
for (let counter=10; counter>=0; counter--) {
  console.log(counter);
  if (counter == 0) {
    console.log("Happy New Year");
  }
}

for (let counter=10; counter>0; counter--) {
  console.log(counter);
  if (counter == 1) {
    console.log("Happy New Year!");
  }
}

// while loop, ask first then performs the instructions
// do while loop, does it first, and then ask questions

do {
  console.log("Happy Holidays");
} while(false);

while (false) {
  console.log("Happy Holidays");
}

//




//
