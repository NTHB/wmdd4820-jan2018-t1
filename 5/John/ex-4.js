/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATED BY: TA
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    eat(){
        console.log("I'm eating");
    }
    walk() {
        console.log("I'm walking");
    }
}

class Dog extends Animal {
    constructor(name,color){
        super(name,color);
    }
    bark(){
        console.log("Woof");
    }
    eat( food ){
        console.log(`${food} are yummy!`);
    }
}

let doggo = new Dog('Hound','Black');
doggo.eat('Bones');
doggo.bark();

class Cat extends Animal {
    constructor(name,color){
        super(name,color);
    }
    eat(){
        console.log(`Fish are yummy!`);
    }
}

let meow = new Cat('Meow','white');
meow.eat();