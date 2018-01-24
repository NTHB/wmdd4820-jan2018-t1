// shared methods
// mario bros
// choose between: mario and luigi
function running() {
  console.log("load the art asset");
  console.log("check for collision");
  console.log(`${this.name} is running`);
}

const mario = {
  name: "Mario",
  height: "short",
  favouriteColour: "red",
  profession: "plumber",
  age: 40,
  // remove : function
  run: running // running is a shared method
};

const luigi = {
  name: "Luigi",
  height: "tall",
  favouriteColour: "green",
  profession: "plumber",
  age: 38,
  run: running
};

//
mario.run();
luigio.run();
