// products - retailer
// class Array {
//   constructor() {}
//   push( element ) {}
//   pop() {}
// }
//
// let shoppingList = new Array();

class Product {
  constructor( name, price, quantity ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  buy() {}
  sell() {}
  updateQuantity( number ) {
    if (number < 0) {
      this.quantity = 0;
    } else if (number > 100) {
      this.quantity = 100;
    } else {
      this.quantity = number;
    }
  }
  // make it so the price is decreased by a sale percentage
  // make you are validating the sale percentage
  sale( percentage ) {
    if (percentage > 1 || percentage < 0) {
      // don't do anything
      // throw an error, display a message
    } else {
      this.price *= percentage;
    }
  }
}

const book = new Product("book", 5, 10);
// book.quantity = 20;
book.updateQuantity( 20 ); // validates the quantity
// book.price = 1000;
book.sale(0.5); // this is method that takes in a percentage, represented between 0 & 1

const food = new Product("food", 2, 100);
const electronic = new Product("electronic", 50, 4);
