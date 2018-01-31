class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Bird extends Animal {
  fly() { console.log("I'm flying") }
  // eat( target ) {
  //   console.log(`${this.name} has just been eaten by ${target.name}`);
  // }
  play( taret ) {
    console.log(`${this.name} am playing with ${target.name}`);
  }
}
class Cat extends Animal {
  meow() { console.log("Meow!") }
  eat( target ) {
    let result = Math.round( Math.random() );

    if (result) {
      console.log(`${this.name} has just eaten ${target.name}`);
    } else {
      console.log(`${target.name} has escaped`)
    }

    // Math.round( Math.random() ) ? console.log("eat") : console.log("escape");
  }
  play( taret ) {
    console.log(`${this.name} am playing with ${target.name}`);
  }
}

const tweety = new Bird("Tweety", 3);
const sylvester = new Cat("Sylvester", 4);
tweety.fly();
sylvester.meow();
sylvester.eat( tweety );
tweety.play( sylvester );

// can you make tweety fly
// can you make slyvester meow

// can you make slyvester eat tweety
// can you make slyvester play with tweety
