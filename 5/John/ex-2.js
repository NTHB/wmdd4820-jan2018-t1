/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATED BY: TA
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class Food {
    constructor(sugar,protein,fat) {
        this.sugar = sugar;
        this.protein = protein;
        this.fat = fat;
    }
}

class Pizza extends Food {
    constructor(sugar,protein,fat,weight){
        super(sugar,protein,fat);
        this.weight = weight;
    }
}

class Beer extends Food {
    constructor(sugar,protein,fat,volumn){
        super(sugar,protein,fat);
        this.volumn = volumn;
    }
}


let pizzahut = new Pizza(20,5,200,'124g');
let stanleyBeer = new Beer(5,1.2,4,1500);


console.log(pizzahut);
console.log(stanleyBeer);
