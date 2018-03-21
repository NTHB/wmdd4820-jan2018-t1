$(function() {


    let links = $("a");

    // Remove all blue shapes
    $('.shape.blue').remove();

    //Remove all shapes in the orange container
    $("#orange-container .shape").remove();

    //Remove all small red circles
    $(".shape.red.circle").remove();

    //Get the html contents of the reset button.
    console.log($("#reset")[0].innerHTML);

    //5. Try to get the html contents of all links. What happened?
    for (let link of links) {
        console.log(link.innerHTML);
    }

    //6. Change the reset button to read "Launch Missiles!"
    $("#reset")[0].innerText = 'Launch Missiles';

    //7. Change all the H1 tags to read "[Your Name] is Cool!"
    for (let h1 of $("h1")) {
        h1.innerHTML = 'John is Cool';
    }
});