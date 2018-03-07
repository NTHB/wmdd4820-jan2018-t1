document.addEventListener('DOMContentLoaded', function () {

    //manipulating styles

    const shape = document.querySelector(".shape");

    shape.style.border = "solid red";


    const shapeStyles = getComputedStyle(shape);


    //get style from shape - read only
    console.log(shapeStyles.width);

    //getting text
    console.log(document.querySelector("h1").innerText);


    //setting text
    document.querySelector("h1").outerHTML = "<h1>Jacob</h1><p>Good teacher</p>";

    const purple_container = document.querySelector("#purple-container");

    console.log(purple_container.id);


    //changing id
    purple_container.id = "violet-container";

    //setting a new class
    purple_container.className = "box";


    //manipulating shapes

    const new_shape = document.querySelector(".shape");

    //getting class list
    console.log(new_shape.classList);

    //add to a class list
    new_shape.classList.add("highlight");

    //remove class
    new_shape.classList.remove('small');
    new_shape.classList.add('medium');


    /* Changing attributes =========================================== */
    // setAttribute, getAttribute, hasAttribute, removeAttribute


    //can you open google hyperlink in a new tag?

    /* first way =========================================== */
    // document.querySelector('a').setAttribute('target','_blank');

    /* second way =========================================== */
    document.querySelector("ul li").firstElementChild.setAttribute("target", "_blank");

    /* removing shapes =========================================== */
    const gray_shapes = document.querySelectorAll(".shape.grey");

    for (let shape of gray_shapes) {
        shape.remove();
    }

    /* putting things back in =========================================== */
    //create element

    const created_div = document.createElement("div");
    created_div.className = "medium shape blue diamond";
    created_div.id = "special";
    created_div.style.backgroundImage = "url('http://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Mega_Man_%28Mega_Man_9%29.png/220px-Mega_Man_%28Mega_Man_9%29.png')";

    let p_container = document.querySelector("#violet-container");

    p_container.appendChild(created_div);

    //
    // let g_container = document.querySelector("#green-container");
    // g_container.prepend(created_div);



}, false);


