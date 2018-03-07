const shapes = ["circle", "square", "diamond"];
const sizes = ["small", "medium", "large"];

const timerCallback = () => {
  if (document.querySelector('.shape')) {
    document.querySelector(".shape").remove();
  }
  else {
    clearInterval(myTimer);
    addRandomShape();
  }
};

const addRandomShape = () => {

  let randomShape = null;
  let randomSize = null;
  let randomColor = null;
  let newShape = null;

  for (let i = 0; i <  16; i++) {
    randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    randomColor = `rgb(${Math.trunc(Math.random() * 256)}, ${Math.trunc(Math.random() * 256)}, ${Math.trunc(Math.random() * 256)})`;

    newShape = document.createElement('div');
    newShape.className = `${randomShape} ${randomSize} shape`;
    newShape.style.backgroundColor = `${randomColor}`;

    if (i < 3) {
      document.getElementsByTagName('section')[0].firstElementChild.insertAdjacentElement('afterend', newShape);
    } else if (i < 6) {
      document.getElementById("purple-container").appendChild(newShape);
    } else if (i < 11) {
      document.getElementById("orange-container").appendChild(newShape);
    } else {
      document.getElementById("green-container").appendChild(newShape);
    }
  }

  myTimer = window.setInterval(timerCallback, 500);
};

let myTimer = window.setInterval(timerCallback, 500);
