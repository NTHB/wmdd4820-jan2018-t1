document.addEventListener('DOMContentLoaded', function () {

    //remove all the blue shapes

    const blue_shapes = document.querySelectorAll(".shape.blue");

    for (let bs of blue_shapes) {
        bs.remove();
    }

    //highlight all the red shapes


    const red_shapes = document.querySelectorAll(".shape.red");

    for (let rs of red_shapes) {
        rs.classList.add("highlight");
    }

    //create a new shape and add it to the orange container

    const new_element = document.createElement("div");
    new_element.className = "small red circle shape";
    const orange_container = document.querySelector("#orange-container");
    orange_container.appendChild(new_element);


    // create new hyperlink prepend google
    const hyperlink = document.createElement("a");
    hyperlink.href = "http://www.nike.com";
    hyperlink.target = "_self";
    hyperlink.innerHTML = "New Link";

    /* changing style =========================================== */
    // hyperlink.classList.add("getBigger");


    hyperlink.addEventListener('mouseenter', () => {
        hyperlink.style.fontSize = "2rem";
        hyperlink.style.color = "red";
    });
    hyperlink.addEventListener('mouseleave', () => {
        hyperlink.style.fontSize = "1rem";
        hyperlink.style.color = "black";
    })

    ;

    const container = document.querySelector("ul");
    const li = document.createElement('li');
    container.prepend(li);

    container.firstChild.appendChild(hyperlink);


    // container.insertAdjacentHTML('afterBegin',"<li>" +
    //     "<a href='http://www.nike.com' target='_self' class='getBigger'>New Link</a>" +
    //     "</li>")



}, false);

