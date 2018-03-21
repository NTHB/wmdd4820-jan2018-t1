$(function () {


    //avoid form submission when clicking add
    $("#myForm").submit(function (e) {
        e.preventDefault();
    });


    /* ------------------------------------------------------------|
    | LISTS MANIPULATION
    *-------------------------------------------------------------*/


    /* VARIABLE INITIALIZATION =========================================== */

    //create pending and completed arrays
    tasks = [];


    /* FUNCTIONS =========================================== */

    //when user clicks to add task
    $("#add-task").click(function () {

        //grab task name from input add task
        let newTask = $("#input-add-task").val();

        /* validation =========================================== */


        if(newTask.length === 0) {
            alert('Please, type something!');
            return false;
        }


        /* adding new elements to list =========================================== */

        /* VISUAL REPRESENTATION =========================================== */

        //add new task element to pending tasks
        let newElement = $("#pending-tasks").append(`<li id="${tasks.length}" class="list-group-item">
                    <i class="fa fa-square"></i>
                    ${newTask}</li>`);

        /* DATA REPRESENTATION =========================================== */
        tasks.push({id: tasks.length, task: newTask, status: 'pending'});//push obj into tasks array

        $(".list-group-item").unbind('click'); //avoid double adding click events (bug)

        itemClick(); //bind click event to dinamically added elements

        //refresh input value
        $("#input-add-task").val("");


    });


    /* ------------------------------------------------------------|
    | ELEMENT HANDLING FUNCTIONS
    *-------------------------------------------------------------*/
    //here, basically we use functions to add to lists or update the data structure

    function updateData(itemId, status) {
        console.log('updating data structure');
        tasks.map((item) => {
            // console.log(`itemId: ${itemId} / ${item.id}`);
            if (item.id == itemId) {
                item.status = status;
            }
        });
        console.log(tasks);
    }

    function addToComplete(item) {
        console.log("its an undone list...adding to complete list");
        //if it does not have a completed item class
        //add disabled class and change font awesome icon
        item.addClass('disabled');
        item.children(1).removeClass('fa-square');
        item.children(1).addClass('fa-check-square');

        item.addClass('completed-item');


        //get its content and move to completed
        $("#completed-tasks").append(item);

        /* data representation =========================================== */
        let itemId = item[0].id;
        updateData(itemId, 'complete');
    }

    function addToPending(item) {
        $("#pending-tasks").append(item);

        item.removeClass('disabled');
        item.removeClass('completed-item');


        item.children(1).addClass('fa-square');
        item.children(1).removeClass('fa-check-square');

        /* data representation =========================================== */
        let itemId = item[0].id;
        updateData(itemId, 'pending');
    }


    function itemClick() {


        $(".list-group-item").click(function () {

            console.log("clicked on list item");

            //check if its a completed item

            console.log($(this).hasClass('completed-item'));
            console.log($(this));


            if (!$(this).hasClass('completed-item')) {

                addToComplete($(this));


            } else {
                console.log('its a completed-item. Adding to pending again...');


                addToPending($(this))


            }
        });


    }

    itemClick();

    /* ------------------------------------------------------------|
    | DRAG AND DROP - jquery UI
    *-------------------------------------------------------------*/




    $("#pending-tasks, #completed-tasks").sortable({

        connectWith: ".list-group", //class that both pending-tasks and completed-tasks have in common
        stop: function (e, ui) {

            //get dragget item and targetID
            let draggedItem = ui.item;
            let targetId = ui.item.parent().attr("id");
            console.log(`Dragged into ${targetId}`);

            //add to complete or pending list, dinamically

            switch(targetId) {
                case 'completed-tasks':
                    addToComplete(draggedItem);

                    break;


                case 'pending-tasks':
                    addToPending(draggedItem);
                    break;



            }



        }


    }).disableSelection();


});
