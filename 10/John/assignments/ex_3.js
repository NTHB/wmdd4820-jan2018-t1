$(function () {

    let links = $("a");
    //1. Select all the shapes in the purple container using "children"

    console.log($("#purple-container").children());

    //2. Select the green container using "parent"
    console.log($(".large.grey.diamond.shape")[0].parentNode)

    //3. Select all the "li" tags that contain a link.

    console.log($("li a[href]"));

    // 4. Hide the purple container

    $("#purple-container").hide();

    //5. Show the purple container again
    $("#purple-container").show();
    // 6. Hide all the links.

    links.hide();

    // 7. Show all the links again.

    links.show();
});