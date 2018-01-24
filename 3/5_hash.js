// hash - string representation of data
// hashtag - twitter
// hash table
// hash key
// cryptography

// hash is a dictionary
// key: value
// pulp: wet pieces of wood mashed together
// fiction: a literary work that is made up
const dictionary = {
  // word: "definition"
  pulp: "wet pieces of wood mashed together"
};

// pulp
dictionary.pulp = "pulverized pieces of wet wood";
// in a hash the key must be unique
// in an object the properties must be unique

// postal codes
// V5B2C9 someplace in burnaby

// elections
// before
let lyric = "all you need is love";

// 1. pseudo code
// split each individual character in this sentence up
// count each occurrence of each character
// keep a running tally

// 2. doing some small code solutions
// small wins
lyrics.split(" ");
// [ 'all', 'you', 'need', 'is', 'love' ]
lyrics.split("");
// ["a", "l", "l", " " .... ]

lyrics.split(" ").join("");
lyric.split(" ").join("").split("");
// no more spaces

// iterate over the array
let lyric = "all you need is love";
// string
let newLyric = lyric.split(" ").join("");

for (let character of newLyric) {
  console.log(character);
}

let lyric = "all you need is love";
// array
let characters = lyric.split(" ").join("").split("");
const results = {};
for (let character of characters) {
  console.log(character);
  results[ character ] = 1;
}

// how do i make properties/keys of these characters?
// before
"all";
["a", "l", "l"];
// after
{
  a: 1,
  l: 1,
  l: 1
}

// 3. unit test

// after???
{
  e: 3,
  l: 3,
  ' ': 4
}

let lyric = "all you need is love";
let characters = lyric.split(" ").join("").split("");
const results = {};

for (let character of characters) {
  console.log(character);
  console.log(results[ character ])
  if (results[ character ] == undefined) {
    results[ character ] = 1;
  } else {
    results[ character ] += 1;
  }
}







// bitcoin



//
