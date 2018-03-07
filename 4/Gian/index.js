// Gianlucci Badiali Minarelli
// Dilpreet sidhu

// #1. Method Exercise
//
// Create a car object  with speed attribute then add a park method to your car
// that logs "Parking!" to the console and a stop method that returns "Stopping!"

const car = {
  speed: Math.round(Math.random() * 150), // speed is a random number in the
  // range from 0 up to (but not including) 150.
  // '(...) add a park method to your car that logs "Parking! to the console (...)"'
  park() {
    console.log("Parking!");
  },
  // ' (...) and a stop method that returns "Stopping!"'
  stop() {
    return "Stopping!";
  }
};

// Change "stop" to have the following output:
//
// "Screeeeetch!!" if speed is "fast" (speed attribute more than 120)
//
// "RRrch."                if speed is "medium"  (speed attribute more than 80)
//
// "sh"                       if speed is "slow"
//
// "Yikes, I don't know how fast I'm going!!!" if speed is anything else.
//
//
// Stretch:  If the speed is a number, output "Screetch!!" with that number of "e"s.

const car = {
  speed: Math.round(Math.random() * 150),
  park() {
    console.log("Parking!");
  },
  stop() {
    if (typeof this.speed === "number") {
      eSpeed = '';
      if (this.speed > 0) {
        for (let i = 1; i <= this.speed; i++) {
          eSpeed = eSpeed.concat(["e"]);
        }
      }
      console.log(`Scr${eSpeed}tch!!`);
    }

    if (this.speed > 120) {
      console.log("Screeeeetch!!");
    } else if (this.speed > 80) {
      console.log("RRrch.");
    } else if (this.speed >= 0) {
      console.log("sh");
    } else { // if speed is not a positive integer (or zero).
      console.log("Yikes, I don't know how fast I'm going!!!");
    }
  }
};

console.log(car.speed);
car.stop();

// #2: Assignment: Team Randomizer
//
// Build an object that has an array of names and a number of teams with one
// method “randomize” that will assign different names to a team. The teams will
// be called: team1, team2..etc.

// TODO: check the types on names, look for repeated names, maybe check if each
// team has at least 2 members (names.length >= 2 * teams)... too lazy to do it
const myValidator = (names, teams) => {
  if (names.length < teams) {
    return {
      name: "RangeError",
      message: "Number of teams is greater than the list of names."
    };
  } else if (!Number.isInteger(teams) || teams <= 0) {
    return {
      name: "TypeError",
      message: "Number of teams should be a positive integer."
    };
  }
};

const myObj = {
  names: ["a", "b", "c", "d", "e", "f", "g"],
  teams: 3,
  randomize() {
    if (myValidator(this.names, this.teams)) { // This is optional (it's just a
    // basic input check). This is usually required when the data comes directly
    // from the user.
      return myValidator(this.names, this.teams);
    }
    let resultArray = [],
    cloneNames = this.names.slice(); // Cloning "names", so we can mutate the
    // copy (we will "splice" it later on).
    const smallTeamSize = Math.trunc(cloneNames.length / this.teams),
    // If A / B = C.D (for example, 10 / 4 = 2.5), then A is at least C times
    // greater than B (10 >= 4 * 2), but not (C + 1) times greater (10 < 4 * 3).
    // If we want our names to be as evenly distributed as possible, the minimum
    // size of each team should be C, and the maximum size (C + 1).
    numberOfBigTeams = cloneNames.length - (this.teams * smallTeamSize);
    // The difference between A and B * C (10 - 4 * 2) is the number os names
    // (the number of "ones") left to be allocated. Since, as I've already
    // mentioned, the difference in size between two teams should not be greater
    // than one: (A - B * C) = the number of "big teams" (with a size of C + 1).
    // In our example, with 10 people and 4 teams, if we follow this algorithm
    // the resulting teams will have 2, 2, 3 and 3 members (2 being the size of
    // the small teams, and 10 - 4 * 2 being the number of big teams, each with
    // a size of 2 + 1).
    for (let i = 0; i < this.teams; i++) { // For each team:
      const size = (i + 1 > numberOfBigTeams) ? smallTeamSize : smallTeamSize + 1, // Calculate its size.
      teamMembers = [];
      for (let j = 0; j < size; j++) { // For each spot on the team:
        const randomIndex = Math.round(Math.random() * (cloneNames.length - 1)); // Get a random index.
        const randomName = cloneNames[randomIndex]; // Get a random name.
        teamMembers.push(randomName); // Add that name to the team's list.
        cloneNames.splice(randomIndex, 1); // Remove the name from the pool of names.
      }
      resultArray.push({ // Update our output with the newly formed team.
        name: `team${i + 1}`,
        size: size,
        teamMembers: teamMembers
      });
    }
    // This is why we cloned "names" (check the logs and compare "names" and its
    // clone at the end of the loop):
    //
    // console.log(this.names);
    // console.log(cloneNames);
    //
    // Cloning "names" preserve the data for future use (we still have all the
    // names stored in the property). At the end of the sorting process the
    // clone array is, as expected, empty - all the names were sorted and
    // "spliced" out of it.
    return resultArray;
  }
};

// #3. Bill Splitter:
//
// Create a bill splitter object that has an amount property, tax, tip and
// number of people property.  Have a method that will calculate how much each
// person owes.

const billSplitter = {
  amount: 100,
  tax: 20,
  tip: 10,
  numberPeople: 4,
  calc() {
    return ((this.amount * (1 + (this.tax / 100))) + this.tip) / this.numberPeople;
  }
};
