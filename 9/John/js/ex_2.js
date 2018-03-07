document.addEventListener('DOMContentLoaded', function () {


    //previous and next siblings

    console.log(document.querySelector(".shape").previousElementSibling);
    console.log(document.querySelector(".shape").nextElementSibling);

    //parent elements
    console.log(document.querySelector(".shape").parentElement);

    //child element
    console.log(document.querySelector("ul").firstElementChild);
    console.log(document.querySelector("ul").children);

    let links = document.querySelectorAll("ul li");

    for (let link of links) {

        if (link.firstChild.href) {
            console.log(link.firstChild.href);
        }

    }


}, false);
