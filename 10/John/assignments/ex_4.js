$(function () {

    // 1. When any shape is clicked, log "shape clicked" to the
    //  console

    $(".shape").click(() => {
        console.log('shape clicked');
    });

    // 2. When your mouse enters any blue circle, log "Blue Circle: GO Away

    $(".blue.circle").mouseover(() => {
        console.log("Blue Circle: Go Away!");
    });

    // 3. When your mouse leaves a blue circle, log "Blue Circle:
    //  Goodbye! to the console.

    $(".blue.circle").mouseleave(() => {
        console.log("Blue Circle: GoodBye!");
    });

    //  4. When your mouse enters any hyperlink, set its class to "highlight".

    $("a").mouseover((e) => {
        let element = $(e.target);
        element.addClass('highlight');
    })


    //  5. When your mouse leaves any hyperlink, set its class to "".
        .mouseleave((e) => {
            let element = $(e.target);
            // element.class = '';
            console.log('mouse leave');
            console.log(element.removeClass('highlight'));

        });
    //  6. When 'button 1' is clicked, remove all shapes.

    $("#button-1").click(() => {
        $(".shape").remove();
    });

    //  7. When 'button 2' is clicked, disable button 2. (Set the
    // 'disabled' attribute to true).
    $("#button-2").click((e) => { 
        $(e.target).attr('disabled', true);
    });

    //  8. When 'button 3' is clicked, set the button message to
    //  "Button 3 was clicked"
    $("#button-3").click((e) => { 
        $("#button-3")[0].innerText = 'Button 3 was clicked';
    });
});