// EXERCISE 10 - GAME ON! Make the game snake!

let snake = [[10, 0]];
let direction = [0, 1];
let points = -1;
let canMove = true;

const updatePoints = () => {
  points++;
  document.getElementById("points").innerText = points;
}

const getSquare = (index) => document.getElementById("grid").children.item(index[0]).children.item(index[1]);

const paintSquare = (index, squareClass) => {
  getSquare(index).className = squareClass;
};

const createFood = () => {
  const blanks = document.getElementsByClassName("blank");
  const randomBlank = blanks[Math.floor(Math.random() * blanks.length)];
  paintSquare([randomBlank.parentElement.dataset.index - 1, randomBlank.dataset.index - 1], "food");
}

const moveBodyPart = (current, target) => {
  paintSquare(current, "blank");
  paintSquare(target, "snake");
  return target;
};

const moveSnake = (direction) => {
  const oldSnake = snake.slice();
  const newHead = snake[0].map((e, i) => e + direction[i]);
  const newHeadClass = newHead[0] === 20 || newHead[1] === 20 || newHead[0] === -1 || newHead[1] === -1 ?  null : getSquare(newHead).className;
  if (newHeadClass === null || newHeadClass === "snake") {
    return null;
  } else if (newHeadClass === "blank" || newHeadClass === "food") {
    for (const [index, bodyPart] of snake.entries()) {
      if (index === 0) {
        snake[index] = moveBodyPart(bodyPart, newHead);
      } else {
        snake[index] = moveBodyPart(bodyPart, oldSnake[index - 1]);
      }
    }
    if (newHeadClass === "food") {
      snake[snake.length] = oldSnake[snake.length - 1];
      paintSquare(snake[snake.length - 1], "snake");
      updatePoints();
      createFood();
    }
  }
  canMove = true;
};

const init = () => {
  window.addEventListener("keydown", (e) => {
    if (canMove) {
      if (e.key === "ArrowDown") {
        if (direction[0] !== -1) {
          direction = [1, 0];
        }
      } else if (e.key === "ArrowLeft") {
        if (direction[1] !== 1) {
          direction = [0, -1];
        }
      } else if (e.key === "ArrowRight") {
        if (direction[1] !== -1) {
          direction = [0, 1];
        }
      } else if (e.key === "ArrowUp") {
        if (direction[0] !== 1) {
          direction = [-1, 0];
        }
      }
      canMove = false;
    }
  });
  paintSquare(snake[0], "snake");
  updatePoints();
  createFood();
  const intervalID = window.setInterval(() => {
    if (moveSnake(direction) === null) {
      clearInterval(intervalID);
      paintSquare(snake[0], "hit-box");
      window.alert(`Game Over !`);
    }
  }, 200);
};

window.onload = init;
