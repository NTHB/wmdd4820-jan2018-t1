// EXERCISE 2 - Build a Safe

//

// build a safe to guard the secret number '714'

// prompt the user to enter the password to our safe

// if the password is correct: "opensesame", alert the safe's secret number

// otherwise, alert a failure message

// [STRETCH] if it incorrect, send them to space (https://nasa.gov)

const safe = '714';

window.onload = () => {
  if (window.prompt('Enter password:') === safe) {
    window.alert('Opensesame! Safe secret number: ' + safe);
  } else {
    window.location = "https://nasa.gov";
  }
}
