// EXERCISE 4 - Wiki Hacker

// Go to the Wikipedia page on Pugs. Open up a console, and hack away with JavaScript:

//

// Change the title of the article to your name.

// Hide the body of the article

// Replace the Wikipedia logo with another picture

// Don't forgot to save your code to a JS file

//

// [Stretch] Replace the word "pug" in every p tag with "spud".


// Console commands:

// Change the title of the article to your name.
document.getElementById('firstHeading').innerHTML = "Gianlucci Badiali Minarelli";

// [Stretch] Replace the word "pug" in every p tag with "spud".
for (const p of document.getElementsByTagName("p")) {
  p.innerText = p.innerText.replace(/pug/gi, "spud");
};

// Hide the body of the article.
document.getElementById('bodyContent').innerHTML = '';

// Replace the Wikipedia logo with another picture.
document.getElementsByClassName('mw-wiki-logo')[0].style.backgroundImage = 'url(http://lorempixel.com/135/155/)';
