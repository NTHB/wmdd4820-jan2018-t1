// inheritance
class Cookie {
  constructor(sugar, flour) {
    this.sugar = sugar;
    this.flour = flour;
  }

  smell() { console.log("smell") }
  bake() { console.log("bake") }
  eat() { console.log("eat") }
  garbage() { console.log("garbage") }
}

class Oreo extends Cookie {
  constructor(sugar, flour, filling) {
    super(sugar, flour); // this allows you to call your parent's method of the same name
    // this.sugar = sugar;
    // this.flour = flour;
    this.filling = filling;
  }

  bake( temp ) { console.log(`bake at ${ temp }F`) } // overriding the method
  split() { console.log("split the oreo") }
  lick() { console.log("lick the oreo") }
  eat() {
    this.split();
    this.lick();
    super.eat();
    //console.log("eat");
  }
}

const cookie = new Cookie(20, 25);
cookie.bake();
cookie.eat();
const oreo = new Oreo(30, 35, "vanilla");
oreo.bake(325);
oreo.eat();
