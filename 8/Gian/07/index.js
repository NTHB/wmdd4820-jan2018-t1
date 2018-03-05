// EXERCISE 7 - Objects + DOM
// Create an array of product objects in JavaScript.
// e.g.
// {
// name: "Otterbox iPhone Case",
// price: 49.99,
// description: "",
// image: "otterbox.png"
// }
// iterate through the array and objects to render them onto a web page. The result should look like a grid of products
// [STRETCH] Create a class for these objects.

class Game {
  constructor(title, price, overview, image) {
    this.title = title;
    this.price = price;
    this.overview = overview;
    this.image = image;
  }
}

const products = [
  new Game("Rayman Legends", "19.97", "Rayman, Globox and the Teensies are back in this new fantasy adventure. Discover a series of legendary worlds with new environments, characters and enemies, as well as a variety of uniquely-themed levels including several musical maps intricately set to creative soundtracks and a spooky medieval theme.", "images/rayman_legends.jpg"),
  new Game("Rise Of The Tomb Raider", "24.97", "Guide Lara Croft on her first expedition in Rise of the Tomb Raider: 20 Year Celebration edition for PlayStation 4. In addition to a copy of the main game, this version includes bonus storylines, modes, outfits, skins, weapons, and DLC. It also includes support for PlayStation VR, which you can use to play through the Blood Ties storyline.", "images/rise_of_the_tomb_raider.jpg"),
  new Game("Tekken 7", "29.97", "Father and son will settle old scores in Tekken 7 for PlayStation 4. The franchise returns with the final chapter in the Mishima Clan blood saga. Featuring the classic 1v1 battles, this 3D fighter introduces new fighting mechanics for new players and a roster of over 30 characters, including Street Fighter's Akuma, to settle this family feud.", "images/tekken_7.jpg"),
  new Game("Overwatch", "59.97", "Twist the threads of time, break the rules of physics, and leverage the weaponry of tomorrow in Overwatch: Origins for PlayStation 4, a team-based first-person multiplayer shooter from Blizzard. Select your hero from 21 extraordinary characters and engage in whirlwind 6 versus 6 combat in visually stunning locations around the world.", "images/overwatch.jpg"),
  new Game("Final Fantasy XIV", "34.97", "Join the fight to liberate Ala Mhigo from the clutches of the Garlean Empire in Final Fantasy XIV: Stormblood for PS4. The next expansion to Final Fantasy IV, this game features new areas to explore, new jobs, and a revamped battle system. Players can also enjoy an expanded item inventory and test themselves with new high-level raids.", "images/ffXIV.jpg"),
  new Game("Persona 5", "59.99", "Lead a double-life as a troubled teen and mysterious Phantom Thief in Persona 5 for PlayStation 4. This long-awaited fifth installment of the critically acclaimed Persona series is developed and produced by the same core team, director, and character designer from the most recent installments in the series.", "images/persona5.jpg")
];

// Don't know how to fix the problem with floats and different height values. That's why I'm using a placeholder text to make sure all li's have the same height.
const lorem =  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.";

const listProducts = (products) => {
  let parent = document.getElementById('products');
  for (product of products) {
    // Creating the new elements:
    let newLi = document.createElement('li');
    let parentDiv = document.createElement('div');
    let newImg = new Image();
    let titleDiv = document.createElement('div');
    let priceDiv = document.createElement('div');
    let overviewDiv = document.createElement('div');
    // Setting the src attribute on the image element:
    // Note: I'm using placeholder values to make sure all the li's have the same dimension (so they don't break the floating design of the page).
    // newImg.src = product.image;
    newImg.src = "images/ffXIV.jpg";
    // Adding classes to the new elements:
    titleDiv.className = 'title';
    priceDiv.className = 'price';
    overviewDiv.className = 'overview';
    // Creating the new text nodes:
    // Note: I'm using placeholder values to make sure all the li's have the same dimension (so they don't break the floating design of the page).
    // const gameTitle = document.createTextNode(product.title);
    const gameTitle = document.createTextNode("Title");
    // const gamePrice = document.createTextNode("$ " + product.price);
    const gamePrice = document.createTextNode("$ 10.99");
    // const gameOverview = document.createTextNode(product.overview);
    const gameOverview = document.createTextNode(lorem);
    // Appending text nodes:
    titleDiv.appendChild(gameTitle);
    priceDiv.appendChild(gamePrice);
    overviewDiv.appendChild(gameOverview);
    // Appending elements to parentDiv:
    parentDiv.appendChild(newImg);
    parentDiv.appendChild(titleDiv);
    parentDiv.appendChild(priceDiv);
    parentDiv.appendChild(overviewDiv);
    // Apendding parentDiv to newLi:
    newLi.appendChild(parentDiv);
    // Appending newLi to the ul:
    document.getElementById('products').appendChild(newLi);
  }
};

// Invoke init on the console.
const init = () => {
  listProducts(products);
};

// window.onload = init;
