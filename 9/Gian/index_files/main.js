$(document).on('ready', function() {

  // $('tr').on('mouseenter', function() {
  //   $(this).attr('class', 'highlight');
  // });

  // $('tr').on('mouseleave', function() {
  //   $(this).attr('class', '');
  // });

  // $('#button-1').on('click', function() {
  //   $('#button-1').attr('disabled', true);
  // });



  // $('.shape').on('click', function() {
  //   // var shapeClass = $(this).attr('class');
  //   // console.log(shapeClass);
  //   // A bunch of hardcore javascript.
  // });

  // $('.shape').on('click', function() {
  //   $(this).parent().remove();
  // });

  $('a').on('mouseenter', function() {
    var href = $(this).attr('href');
    console.log("Your mouse entered a link to: " + href);
  });

});
