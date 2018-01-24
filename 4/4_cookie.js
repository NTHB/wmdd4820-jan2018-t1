// declaritive function
function printing() {
  console.log(`I am a(n) ${ this.name } cookie`);
}

// function expression
let printing = function() {
  console.log(`I am a(n) ${ this.name } cookie`);
}

const chocolateChip = {
  name: "chocolate chip",
  print: printing
};

const oatmeal = {
  name: "oatmeal",
  print: printing
};

const oreo = {
  name: "oreo",
  print: printing
};

chocolateChip.print();
oatmeal.print();
oreo.print();
