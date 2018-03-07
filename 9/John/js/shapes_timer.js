/*
 Create a javascript interval timer that remove shapes one by one off the screen one second apart. 

Once all shapes have been removed, start adding back in 16 shapes with random sizes, random colours, and random shapes to the page.

[STRETCH] Loop it so it does it all again.
* */


  document.addEventListener('DOMContentLoaded', function(){

      /* ------------------------------------------------------------|
      | SHAPES TIMER
      *-------------------------------------------------------------*/


      // Create a javascript interval timer that remove shapes one by one off the screen one second apart.


      function removeShapes() {
          console.log('removing shapes');

          const all_shapes = document.querySelectorAll(".shape");
          let shapes_length = all_shapes.length;
           shapes_copy = all_shapes;


       let i = 0;
       let interval = setInterval(() => {
           all_shapes[i].remove();
           i++;

           if (i === shapes_length) {
               clearInterval(interval);
               addAgain(); //now start adding everything again
           }


       }, 1000);
   }

   removeShapes(); //start removing





      function addAgain() {




          let i = 0;
          //set containers
          const purple_container = document.querySelector("#purple-container");
          const orange_container = document.querySelector("#orange-container");
          const green_container = document.querySelector("#green-container");

          //set total shape size, to limit interval counting
          let shape_copy_size = shapes_copy.length;

          let addInterval = setInterval(() => {
              console.log(`i: ${i} - Shape copy size: ${shape_copy_size}`);
                          if (i >= shape_copy_size) {
                              clearInterval(addInterval);
                              console.log("end... starting again");
                              removeShapes();

                          } else {

                              //create random shape dom element
                              const random_shape = document.createElement("div");

                              //store random classes inside an array
                              let randomShapes = [
                                  'small red circle shape',
                                  'medium blue diamond shape',
                                  'medium black square shape',
                                  'medium black square shape highlight',
                              ];

                              //assign a random class
                              let n = Math.floor(Math.random()*randomShapes.length);
                              console.log(`Random class: ${n} - ${randomShapes[n]}`);
                              random_shape.className = randomShapes[n];

                              //manage container appending
                              if (i >= 0 && i <= 4) {
                                  purple_container.appendChild(random_shape);

                              }
                              if (i > 4 && i <= 8) {
                                  orange_container.appendChild(random_shape);

                              }
                              if (i > 8) {
                                  green_container.appendChild(random_shape);

                              }

                              i++;
                          }


          }, 1000)

      }

  }, false);
