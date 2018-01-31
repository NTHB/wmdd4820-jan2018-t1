// create a team randomizer
["jacob", "jason", "denis"];

// make this list of teachers into groups of one
Team 1: Jacob
Team 2: Jason
Team 3: Denis

// make teams of two
Team 1: Jacob, Jason
Team 2: Denis

// make teams of three
Team 1: Jacob, Jason, Denis

// step 1: iterate over an array
let teachers = ["jacob", "jason", "denis"];
let numberPerTeam = 2;
let teams = [];


let counter = 0;

for (let teacher of teachers) {
  console.log(counter + teacher);
  counter++;
  if (counter >= numberPerTeam) {
    counter = 0;
    console.log('--');
  }
}

[
  ["Jacob", "Jason"],
  ["Denis"]
]


// randomization
             //   0         1         2


Math.random(); // into valid addresses

Math.round(); // 0.5 or up, round up
Math.floor(); // always round down
Math.ceil(); // always round up

Math.round(Math.random() * teachers.length);

let teachers = ["Jacob", "Jason", "Denis"];

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}

let newTeachers = shuffle(teachers);
let numberPerTeam = 2;
let teams = [];

let counter = 0;
let currentTeam = [];

// for (let teacher of newTeachers) {
for (let i=0; i<newTeachers.length; i++) {
  // console.log(counter + teacher);
  // construct an array
  // add teachers to this array
  currentTeam.push(newTeachers[i]);
  counter++;

  if (counter >= numberPerTeam || i == newTeachers.length-1) {
    // add that list of teachers to the original teams multidimensional array
    teams.push( currentTeam );
    currentTeam = [];
    // move to a new addresses
    // construct a new array
    counter = 0;
    console.log('--');
  }
}

//
