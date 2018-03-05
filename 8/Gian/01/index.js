// EXERCISE 1 - Password Checker

//

// make a webpage that asks for a password using prompt.

// if the password is longer that 12 characters, write to the page "Too long!"

// if the password is less than 8 characters, write to the page "Too short!"

// otherwise write to the page "just right!"

window.onload = () => {
  const password = window.prompt('Enter the password:');
  if (password.length > 12) {
    document.write("Too Long!");
  } else if (password.length < 8) {
    document.write("Too Short!");
  } else {
    document.write("Just Right!");
  }
}
