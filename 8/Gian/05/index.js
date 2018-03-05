// EXERCISE 5 - Craigslist Hacker

// Go to Vancouver's Craiglist page and hack away with JavaScript:

//

// Get the number of links on this page.

// Change the text for all links to be your name.

// Get the href attribute of the first link on the page.

// Make Craigslist's logo link to http://www.google.com

// Make of all the text use the Papyrus font.

// [Stretch] Make the event calendar alternate the background colour of each day square like a chess board.

// [STRETCH STRETCH] Remove all p and a nodes that contain the substring "es"


// Console commands:

// Get the number of links on this page.
document.getElementsByTagName('a').length;

// Change the text for all links to be your name.
for (const e of document.getElementsByTagName('a')){
  e.innerHTML = 'Gian';
};

// Get the href attribute of the first link on the page.
document.getElementsByTagName('a')[0].getAttribute('href');

// Make Craigslist's logo link to http://www.google.com.
document.getElementById('logo').firstElementChild.setAttribute('href', 'http://www.google.com');

// Make of all the text use the Papyrus font.
document.getElementsByTagName('body')[0].style.fontFamily = 'Papyrus';

// [Stretch] Make the event calendar alternate the background colour of each day square like a chess board.
for (const row of document.getElementsByClassName("cal")[0].firstElementChild.children) {
  if (row.className !== "days") {
    for (const data of row.children) {
      if (data.previousElementSibling) {
        data.style.backgroundColor = data.previousElementSibling.style.backgroundColor === "rgb(0, 0, 0)" ? "#fff" : "#000";
      } else if (row.previousElementSibling.className !== "days") {
        data.style.backgroundColor = row.previousElementSibling.lastElementChild.style.backgroundColor === "rgb(0, 0, 0)" ? "#fff" : "#000";
      } else {
        data.style.backgroundColor = "#000";
      }
    }
  }
}

// [STRETCH STRETCH] Remove all p and a nodes that contain the substring "es".

// Removing "p" nodes.
for (const p of document.getElementsByTagName("p")) {
  if (/es/.test(p.innerText)) {
    p.innerText = "";
  }
};

// Removing "a" nodes.
for (const a of document.getElementsByTagName("a")) {
  if (/es/.test(a.innerText)) {
    a.innerText = "";
  }
};
