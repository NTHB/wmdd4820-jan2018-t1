// EXERCISE 6 - Arrays + DOM
// Create an array of your top 10 favourite songs in JavaScript and add them to an ordered list in HTML. Bonus points for pretty CSS :)

const topTen = [
  'Song 1',
  'Song 2',
  'Song 3',
  'Song 4',
  'Song 5',
  'Song 6',
  'Song 7',
  'Song 8',
  'Song 9',
  'Song 10'
];

const listSongs = (songs) => {
  let parent = document.getElementById('top-ten');
  for (song of songs) {
    let newLi = document.createElement('li');
    const newContent = document.createTextNode(song);
    newLi.appendChild(newContent);
    document.getElementById('top-ten').appendChild(newLi);
  }
};

// Invoke init on the console.
const init = () => {
  listSongs(topTen);
};
