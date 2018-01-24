// global name space
// printing();
//
// function printing() {
//   console.log(`I am a cookie`);
// }
//
// printing();



// function expression
let printing = function() {
  console.log(`I am a cookie`);
};

printing();







// scope
{
  let b = 10;
  {
    let a = 5;
    console.log(b);
    let printing = function() {
      console.log(`I am a cookie`);
    };

  }

  console.log(a);
  console.log(b);
  printing();
}
