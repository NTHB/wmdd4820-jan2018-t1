// EXERCISE 3 - Build a Friendly Safe

// change the safe so that it asks the user if they want to enter the safe first:

// "Welcome to SuperSafe! Are you sure you want to enter?"

// [cancel]

// "OK, Goodbye then.. :("

const safe = '714';

window.onload = () => {
  if (window.confirm('Welcome to SuperSafe! Are you sure you want to enter?')) {
    if (window.prompt('Enter password:') === safe) {
      window.alert('Opensesame! Safe secret number: ' + safe);
    } else {
      window.location = "https://nasa.gov";
    }
  } else {
    window.alert('OK, Goodbye then.. :(');
  }
}
