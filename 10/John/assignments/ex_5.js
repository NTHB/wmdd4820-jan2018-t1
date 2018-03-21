$(function () {
// 1. When any shape is clicked, log the value of its "class"
    // attribute to the console.

    $(".shape").click((e) => {
        let element = $(e.target);
        console.log(element.attr('class'));

        // console.log($(this).attr('class'))

    });

    // 2. When any shape is clicked, hide it.

    $(".shape").click((e) => {
        let element = $(e.target);
        element.hide();

    })
    // 3. When any shape is clicked, remove its container

    $(".shape").click((e) => {
        let element = $(e.target);
        console.log(element.parent().remove())

    })

    // 4. When any container is clicked, remove all the shapes inside it.

    $(".container").click(function (e) {
        let element = $(e.target);
        element.children().remove();
    });


    // 5. When your mouse enters any link, log the value of its "href"attribute to the console. "Your mouse entered a link to:
    //     [href]"

    $("a").mouseover((e) => {

        let element = $(e.target);

        console.log("Your mouse entered a link to......... " + element.attr('href'));

    });

    // 6. When any button is clicked, set the button message to
    // "Button [button id] was clicked"

    $('.button').click((e) => {

        console.log("button click");
        $("#button-message")[0].innerText = `Button ${$(e.target).attr('id')} was clicked`;


    });


    //    7. Create a shrinking AND growing gun that shrink your shapes to small, and then back up to large, and then back down to small, etc...

    $("#gun").click((e) => {

        $(e.target).attr('src','assignments/gfx/gun.gif');

        let audio = new Audio('assignments/sfx/ak47.wav');
        audio.play();

        setInterval(() => {

            let shapes = $(".shape");

            if(shapes.hasClass('large')){
                shapes.addClass('small').removeClass("large");
            } else if(shapes.hasClass('small')) {
                shapes.addClass('large').removeClass('small');
            }




        },2000)



    });


});
