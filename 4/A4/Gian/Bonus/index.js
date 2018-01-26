// Gianlucci Badiali Minarelli

// In this solution I decided to take advantege of the pattern we can see on the
// encoding/decoding table. We could also solve the problem by just copy/pasting
// the table and using it to 'find' the corresponding code/symbol.

const myEnigma = (inputArray) => {
  // Quick input check (as required):
  if (inputArray.constructor !== Array) { // Not an array.
    return null;
  } else if (inputArray.length === 0) { // Empty array.
    return inputArray;
  }
  // Key:
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'],
  suits = ['c', 'd', 'h', 's'];
  // I'm not going to validate each element in the array. I'm assuming the input
  // (numbers or strings) is valid.
  if (Number.isInteger(inputArray[0])) { // Decoding.
    return inputArray.sort(function(a, b) {
      return a - b;
    }).map(e => `${ranks[e - (Math.trunc(e / 13) * 13)]}${suits[Math.trunc(e / 13)]}`);
    //Warning: Maths ahead.
    //
    // The ranks and suits are distributed in a certain pattern:
    // The difference between the codes of two symbols sharing the same rank
    // (like 'Ac' and 'Ah') is always a multiple of 13. If we multiply the index
    // of a suit (called the 'precedence' on the instructions) by 13
    // (1 * 13 in '3d', for example), we have the difference between that
    // symbol's code and the code of the symbol with the same rank and suit 'c'
    // (1 * 13 = 13 = 15 - 2 = [code of '3d' - code of '3c']). All I did above
    // was use this algorithm in reverse to determine a code's corresponding
    // symbol. For example, if we had the number 32:
    // 1) Since (32 > 13 * 2) and (32 < 13 * 3), we know that the corresponding
    // symbol's suit is 'h' (with index 2), because this is the 'number of steps'
    // (of 13 units) the code can take from the 'c' suite codes (index 0).
    // 2) Knowing the suite, if we multiply its index by 13, the difference
    // between the code (32) and that result (2 * 13) is the index of the
    // corresponding symbol's rank (or 'distance from the rank A'), in this
    // case: 32 - (2 * 13) = 6, which corresponds to the rank '7'.
    // 3) From 1) and 2) we now know the corresponding symbol is '7h' (you can
    // check the answer on the table).
    //
    // I used the same algorithm below (this time, directly).
  } else if (typeof inputArray[0] === 'string') { // Encoding.
    return inputArray.map(e => {
      const [rank, suit] = e.split('');
      return (13 * suits.indexOf(suit) + ranks.indexOf(rank));
    }).sort(function(a, b) {
      return a - b;
    });
  }
};

console.log(myEnigma([0, 51, 30, 22, 2]));
console.log(myEnigma(['Ac', 'Ks', '5h', 'Td', '3c']));
