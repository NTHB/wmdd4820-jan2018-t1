$(function () {


    //  1. Get the "href" attribute of the first link on the page

    let links = $("a");

    console.log(links.first()[0].href);

    //  2. Set the "href" attribute of all links on the page to "http://langara.ca". Try clicking one
    links.attr('href', "http://langara.ca");

    //  3. Set the "class" attribute of all links to "highlight"
    links.attr('class', 'highlight'); //uncomment to work

    // 4. Set the "class" attributes of all shapes to "highlight".
    $(".shape").attr("class", 'highlight');

    //the shapes are gone now (other classes are removed).
});