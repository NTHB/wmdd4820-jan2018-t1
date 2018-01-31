/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATED BY: JOHN - JOAO PAULO 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Create a Person class with 4 properties: name, age, weight, hobbies.
Create 3 methods: walk, run, jump
Instantiate 3 different people using the Person class
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class Person {
    constructor(name, age, weight, hobbies) {
        this.name = name;
            this.age = age;
            this.weight = weight;
            this.hobbies = hobbies;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }

    run() {
        console.log(`${this.name} is running`);
    }

    jump() {
        console.log(`${this.name} is jumping`);
    }
}

let Ta = new Person('Ta', 24, 70, 'Java');

Ta.jump();
Ta.walk();
Ta.run();

