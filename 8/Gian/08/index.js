// EXERCISE 8 - Forms + DOM
// Create a pizza order form in HTML. Populate the form elements using JavaScript.
// 1. toppings in a drop down list
// 2. special instructions in a text area
// 3. checkboxes for sauces
// 4. radio buttons for pickup or delivery
// [STRETCH] Make the form elements

const popform = (topping, instructions, sauces, delivery) => {
  // Selecting the topping:
  document.getElementById("toppings").selectedIndex = topping;
  // Entering a special instruction:
  document.getElementById("instructions").value = instructions;
  // Selecting sauces:
  for (const sauce of sauces) {
    document.getElementById(sauce).checked = true;
  }
  // Selecting pickup or delivery:
  if (delivery) {
    document.getElementById("delivery").checked = true;
  } else {
    document.getElementById("pickup").checked = true;
  }
};

const init = () => {
  popform(2, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", ["sauce2", "sauce4"], true);
};

// Note: I'm not doing the stretch exercise because it would take way too much time and there isn't really anything special about it (check exercise 7 for some Document.createElement() goodness). It is a good exercise, though.
