function greet() {
  console.log("Hello!");
}

greet();
greet();
greet();
greet();
greet();

// input / output factories
// name is a parameter or an argument
function greet( name ) {
  // console.log("Hello"  + name + "!");
  console.log(`Hello  ${ name } !`);
}

greet("Jacob");
greet("Denis");
greet("Jason");

//
function addOne( number ) {
  console.log( number + 1 );
}

addOne(3.14159);
addOne(42);
addOne(24601);

function add(number1, number2) {
  let result = number1  + number2;
  console.log( result );
}

add(5,6);
add(10,2);

function concat(string1, string2) {
  console.log( string1 + string2 );
}

concat("Jacob", "Denis");
concat(10, 2);

function subtract(number1, number2) {
  console.log(number1 - number2);
}

subtract(15, 5); // 10

subtract(15, 5) * 2; // 20
subtract(15, 5) * 2; // not possible

// NaN = Not A Number

// functions are values
10;
"Jacob";
true;
function() {}; // ????

// a special keyword "return" will turn a function into a meaningful value
function three() {
  return 3;
}
// 3         6         18       6
three() + three() * three() / three();
3;

// console.log(10);
// console.log(9);
// console.log(12);
// console.log(4);

// console log is developers tool to print multiple values to the console


// console.log(10);
// 10;

function five() {
  return 5;
}

function six() {
  return 6;
}

console.log( five() );
console.log( six() );

function five() {
  return 5;
}

function six() {
  return 6;
}

console.log( 5 );
console.log( 6 );

console.log( 5 ) + console.log( 6 ); // undefined + undefined
five() + six();

// return is used when you want your function to become a meaninful value
function square( number ) {
  return number ** 2;
}

// the square function when you call it, becomes the number
square(4); // 16
square(4) + square(7);

function instructions() {
  console.log("unpack the ikea box");
  console.log("build it");
  console.log("dont get it wet");
}

instructions();
console.log();
document.write();
window.alert();

function productLookup( id ) {
  return "toater";
}

productLookup(12312); // "toaster"


 //
