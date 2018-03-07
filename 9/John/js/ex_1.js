document.addEventListener('DOMContentLoaded', function(){


    /* ------------------------------------------------------------|
    | EXERCISE 0
    *-------------------------------------------------------------*/


    /* ------------------------------------------------------------|
    | EXERCISE 1
    *-------------------------------------------------------------*/

    //select all the red shapes inside the orange container

    let red_orange = document.querySelectorAll("#orange-container .shape.red");
    console.log(red_orange);


    //select all medium or small shapes inside the green container
    let medium_small = document.querySelectorAll("#green-container .small,#green-container .medium");
    console.log(medium_small);

    //select all the shapes inside any container
    let all_shapes =   document.querySelectorAll(".container .shape");
    console.log(all_shapes);

    //select all the link tags

    let link_tags =   document.querySelectorAll("a");
    console.log(link_tags);

    //select all the links within an li tag

    let links_within_li =   document.querySelectorAll("li a");
    console.log(links_within_li);

    //count the total number of small blue circles

    let small_blue =   document.querySelectorAll(".shape.small.circle.blue").length;
    console.log(`There are ${small_blue} small blue circles`);





}, false);
