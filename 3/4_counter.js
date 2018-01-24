// counter
let counter = 0;
// counter++;
// (counter < 10)

// counter object
const counter = {
  value: 0,
  step: 1
};

//
counter.value; // 0;
// take this counter and increase it by the step
counter.value += counter.step;
counter.value += counter.step;
counter.value += counter.step;
counter.value += counter.step; // 4

counter.step = 2;
counter.value += counter.step; // 6
counter.value += counter.step; // 8
counter.value += counter.step; // 10
