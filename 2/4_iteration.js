// iteration

// for loop
// while loop

let shoppingCart = [
  "Nintendo Switch",
  "iPhone X",
  "FitBit"
];

// brute force
shoppingCart[0];
shoppingCart[1];
shoppingCart[2];

// for loop
// for ( of )
for (let item of shoppingCart) {
  console.log( item );
}

// 2 dimensional structure
let teachers = [
  ["Jacob", "Tran"],
  ["Denis", "Billette"],
  ["Jason", "Madar"]
];

for (let teacher of teachers) {
  // console.log( teacher ); // an array
  // brute force
  console.log( teacher[0] );
  console.log( teacher[1] );
}

// flatten the data
for (let teacher of teachers) {
  // teacher is an array of names
  for (let name of teacher) {
    console.log(name);
  }
}

let todoList = [
  "submit payroll",
  "teach robotics",
  "mark homework"
];

todoList.length; // 3

for (let i=0; i<todoList.length; i++) {
  console.log(todoList[i]);
}

// 


//
//
