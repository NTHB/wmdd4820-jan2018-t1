document.addEventListener('DOMContentLoaded', function () {
    //select for me all the shapes on the page
    let shapes = document.querySelectorAll(".shape");
    console.log(shapes);

//select only the red shapes

    let red_shapes = document.querySelectorAll(".shape.red");
    console.log(red_shapes);

//how many blue shapes are there, I want to print out in my console.

    let blue_shapes = document.querySelectorAll(".shape.blue").length;
    let black_shapes = document.querySelectorAll(".shape.black").length;
    console.log(`There are ${blue_shapes} blue shapes and ${black_shapes} black shapes`);

}, false);
