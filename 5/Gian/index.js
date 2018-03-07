// 1.
// Create a Person class with 4 properties: name, age, weight, hobbies.
// Create 3 methods: walk, run, jump
// Instantiate 3 different people using the Person class

class Person {
  constructor (name, age, weight, hobbies) {
    this.name = name;
    this.age = age;
    this.weight = weight; // kg
    this.hobbies = hobbies;
  }
  walk () {
    console.log('Walking.');
  }
  run () {
    console.log('Running.');
  }
  jump () {
    console.log('Jumping.');
  }
}

const theCaptain = new Person('Morpheus', 12, 86, ['ships', 'pills']);
const theAgent = new Person('Smith', 12, 72, ['sunglasses', 'AIs']);
const theOne = new Person('Neo', 12, 75, ['hacking', 'flying']);

console.log(theCaptain);
console.log(theAgent);
console.log(theOne);

// 2.
// Create a Pizza class and a Beer class. They both should have sugar, protein and
// fat attributes. The Pizza class should have weight attribute and the beer class
// should have volume attribute. Create a parent Food class and use inheritance.

class Food {
  constructor(sugar, protein, fat) {
    this.sugar = sugar;
    this.protein = protein;
    this.fat = fat;
  }
}

class Pizza extends Food {
  constructor(sugar, protein, fat, weight) {
    super(sugar, protein, fat);
    this.weight = weight;
  }
}

class Beer extends Food {
  constructor (sugar, protein, fat, volume) {
    super(sugar, protein, fat);
    this.volume = volume;
  }
}

const myPizza = new Pizza (18, 48, 56, 560);
const myBeer = new Beer (11.3, 1.5, 0, 354);

console.log(myPizza);
console.log(myBeer);

// 3.
//
// Build a class called FizzBuzz that takes two numbers as parameters and then have
// a method called run that returns a fizzbuzz array (numbers from 1 to 100, numbers
// divisible by the first number replaced by 'fizz' and numbers divisible by the
// second number replaced by 'buzz' and numbers divisible by both replaced by 'fizzbuzz').
//  For instance this code should work with your class:
//
// let fb = new FizzBuzz(3,5);
// fb.run(); // returns an array like: [1, 2, 'fizz', 4, 'buzz, ...
//
// Now modify your solution to make it flexible and be able to change the numbers
// after you create the object. For instance:
//
// let fb = new FizzBuzz(3,5);
// fb.run() // returns an array: [1, 2, 'fizz', 4, 'buzz, ...
// fb.setFirstNumber(2);
// fb.setSecondNumber(3);
// fb.run() // returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...

class FizzBuzz {
  constructor (f, b) {
    this.f = f;
    this.b = b;
  }
  run () {
    let runArray = [];
    for (let i = 0; i < 100; i++) {
      runArray[i] = i + 1;
    }
    return runArray.map(e => e % this.f ? (e % this.b ? e : 'buzz') : (e % this.b ? 'fizz' : 'fizzbuzz'));
  }
  setFirstNumber(inputF) {
    this.f = inputF;
  }
  setSecondNumber(inputB) {
    this.b = inputB;
  }
}

const fb = new FizzBuzz(3, 5);
fb.setFirstNumber(2);
fb.setSecondNumber(3);
console.log(fb.run());

// 4.
//
// Build a class Animal that has two methods: "eat" that prints "I'm eating" and
// "walk" that prints "I'm walking". Make the class have two properties: name and
// color. Make the constructor method set those two variables.
//
// Now build a class called Dog that inherits from the Animal class. Add a new
// method to this class called bark that returns woof. Override the eat methods and
// make it print whatever the Animal class eat method prints and then print "Bones
// are yummy!".
//
// Now build a class called Cat that inherits from the Animal class. Override the
// eat methods and make it print "Fish is yummy!".

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  eat () {
    console.log(`I'm eating`);
  }
  walk () {
    console.log(`I'm walking`);
  }
}

class Dog extends Animal {
  // Add a new method to this class called bark that returns woof
  bark () {
    return 'woof';
  }
  eat () {
    // Override the eat methods and make it print whatever the Animal class eat
    // method prints...
    super.eat();
    //(...) and then print "Bones are yummy!".
    console.log(`Bones are yummy!`);
  }
}

class Cat extends Animal {
  eat () {
    console.log(`Fish is yummy!`);
  }
}

const ghostDog = new Dog('Zero', 'White');
const catWithABag = new Cat('Felix', 'Black');

console.log(ghostDog.bark());
ghostDog.eat();
catWithABag.eat();
