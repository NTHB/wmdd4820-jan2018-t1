// make a cookie class
// smell it, bake it, eat it, throw it away
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

class Oreo {
  constructor(sugar, flour, filling) {
    this.sugar = sugar;
    this.flour = flour;
    this.filling = filling;
  }

  smell() { console.log("smell") }
  bake() { console.log("bake") }
  eat() { console.log("eat") }
  garbage() { console.log("garbage") }
}

const cookie = new Cookie(10, 20);
const oreo = new Oreo(20, 25, "vanilla");
