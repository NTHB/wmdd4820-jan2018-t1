const e1 = () => {
  // Exercise 1
  //
  // 1. Get the "href" attribute of the first link on the page
  console.log(`First link href: ${$("a").attr("href")}`);

  // 2. Set the "href" attribute of all links on the page to "http://langara.ca". Try clicking one.
  $("a").attr("href", "http://langara.ca");

  // 3. Set the "class" attribute of all links to "highlight"
  $("a").addClass("highlight");

  // 4. Set the "class" attributes of all shapes to "highlight". What
  // happened?
  $(".shape").addClass("highlight");
};

const e2 = () => {
  // Exercise 2
  //
  // 1. Remove all blue shapes
  $(".shape.blue").remove();

  // 2. Remove all shapes in the orange container
  $("#orange-container").children().remove();
  // Alternatively:
  // $("#orange-container > .shape").remove();

  // 3. Remove all small red circles
  $(".small.red.circle.shape").remove();

  // 4. Get the html contents of the reset button.
  console.log(`HTML contents of the reset button: ${$("#reset").html()}`);

  // 5. Try to get the html contents of all links. What happened?
  //The line of code below doesn't work as expected because the html() method will "Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element." (source: http://api.jquery.com/html/).
  console.log(`HTML contents of all (not really) links: ${$("a").html()}`);

  // 6. Change the reset button to read "Launch Missiles!"
  $("#reset").text("Launch Missiles!");

  // 7. Change all the H1 tags to read "[Your Name] is Cool!"
  $("h1").text("Gian is Cool!");
};

const e3 = () => {
  // Exercise 3
  //
  // 1. Select all the shapes in the purple container using "children"
  $("#purple-container").children(".shape");
  // To test the selection, uncomment the line of code below:
  // $("#purple-container").children(".shape").addClass("highlight");

  // 2. Select the green container using "parent"
  $(".medium.red.diamond.shape").parent();
  // To test the selection, uncomment the line of code below:
  // $(".medium.red.diamond.shape").parent().addClass("highlight");

  // 3. Select all the "li" tags that contain a link.
  $("li").has("a");
  // To test the selection, uncomment the line of code below:
  // $("li").has("a").addClass("highlight");

  // 4. Hide the purple container
  $("#purple-container").hide();

  // 5. Show the purple container again
  $("#purple-container").show();

  // 6. Hide all the links.
  $("a").hide();

  // 7. Show all the links again.
  $("a").show();
};

const e4 = () => {
  // Exercise 4
  //
  // 1. When any shape is clicked, log "shape clicked" to the
  // console
  $(".shape").click(() => {
    console.log("shape clicked");
  });
  // 2. When your mouse enters any blue circle, log "Blue Circle:
  // Go away!" to the console.
  $(".blue.circle.shape").mouseenter(() => {
    console.log("Blue Circle: Go away!");
  });
  // 3. When your mouse leaves a blue circle, log "Blue Circle:
  // Goodbye! to the console.
  $(".blue.circle.shape").mouseleave(() => {
    console.log("Blue Circle: Goodbye!");
  });
  // 4. When your mouse enters any hyperlink, set its class to "highlight".
  // Using arrow functions (ES6):
  $("a").mouseenter((event) => {
    // We have to use event.currentTarget:
    $(event.currentTarget).addClass("highlight");
  });

  // Using the traditional function declaration as the callback:
  // $("a").mouseenter(function () {
  //   // We can use "this" to reference the event target:
  //   $(this).addClass("highlight");
  // });

  // For more information regarding "this" and the difference between the two solutions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this.
  // Notes:
  // - We could have used "event.target" instead of "event.currentTarget".
  // - From now on, I'll only be using the first solution (arrow function with event.currentTarget as the reference to the event object).

  // 5. When your mouse leaves any hyperlink, set its class to "".
  $("a").mouseleave((event) => {
    $(event.currentTarget).removeClass();
  });

  // 6. When 'button 1' is clicked, remove all shapes.
  $("#button-1").click(() => {
    $(".shape").remove();
  });

  // 7. When 'button 2' is clicked, disable button 2. (Set the
  // 'disabled' attribute to true).
  $("#button-2").click((event) => {
    $(event.currentTarget).attr("disabled", true);
  });

  // 8. When 'button 3' is clicked, set the button message to
  // "Button 3 was clicked"
  $("#button-3").click((event) => {
    $(event.currentTarget).text("Button 3 was clicked");
  });
};

const e5 = () => {
  // Exercise 5
  //
  // 1. When any shape is clicked, log the value of its "class"
  // attribute to the console.
  $(".shape").click((event) => {
    // The JQuery way:
    console.log($(event.currentTarget).attr("class"));
    // Vanilla JavaScript:
    // console.log(event.currentTarget.className);
  });

  // 2. When any shape is clicked, hide it.
  $(".shape").click((event) => {
    $(event.currentTarget).hide();
  });

  // 3. When any shape is clicked, remove its container
  $(".shape").click((event) => {
    $(event.currentTarget).parent(".container").remove();
  });

  // 4. When any container is clicked, remove all the shapes inside it.
  $(".container").click((event) => {
    $(event.currentTarget).children(".shape").remove();
  });

  // 5. When your mouse enters any link, log the value of its "href"
  // attribute to the console. "Your mouse entered a link to:
  // [href]"
  $("a").mouseenter((event) => {
    console.log(`Your mouse entered a link to: ${$(event.currentTarget).attr("href")}`);
  });

  // 6. When any button is clicked, set the button message to
  // "Button [button id] was clicked"
  $("button").click((event) => {
    $(event.currentTarget).text(`Button ${$(event.currentTarget).attr("id")} was clicked`);
  });

  // 7. Create a shrinking AND growing gun that shrink your shapes to small, and then back up to large, and then back down to small, etc...
  $(".shape").off("click");
  $(".container").off("click");
  const shapeSizes = ["small", "medium", "large"];
  $(".shape").click((event) => {
    if ($(event.currentTarget).hasClass(shapeSizes[0])) {
      $(event.currentTarget).removeClass(shapeSizes[0]);
      event.currentTarget.isGrowing = true;
      $(event.currentTarget).addClass(shapeSizes[1]);
    } else if ($(event.currentTarget).hasClass(shapeSizes[2])) {
      $(event.currentTarget).removeClass(shapeSizes[2]);
      event.currentTarget.isGrowing = false;
      $(event.currentTarget).addClass(shapeSizes[1]);
    } else if ($(event.currentTarget).hasClass(shapeSizes[1])) {
      $(event.currentTarget).removeClass(shapeSizes[1]);
      event.currentTarget.isGrowing = event.currentTarget.isGrowing === false ? false : true;
      if (event.currentTarget.isGrowing) {
        $(event.currentTarget).addClass(shapeSizes[2]);
      } else {
        $(event.currentTarget).addClass(shapeSizes[0]);
      }
    }
  });
};

// If you don't want to invoke each function on the console, uncomment the code below and select (uncomment) the functions you want to be invoked when the page loads.
// Note: Don't forget to uncomment the last line.

// const appInit = () => {
//   // e1(); // Exercise 1.
//   // e2(); // Exercise 2.
//   // e3(); // Exercise 3.
//   // e4(); // Exercise 4.
//   // e5(); // Exercise 5.
// };
//
// $("document").ready(appInit);
