$(document).on('mousemove mousedown', function(e) {
  $('.hover').css({
    transform: "translate(" + e.pageX + "px," + e.pageY + "px)",
    "box-shadow": ""
  });
  // If the mouse is clicked, change the transform to include scale,  transform and drop-shadow
  if(e.buttons === 1) {
    $('.hover').css({
      transform: "scale(2,2) translate(" + e.pageX/2 + "px," + e.pageY/2 + "px)",
      "box-shadow": "0px 0px 0px 5000px rgba(0, 0, 0, 0.75), inset 0px 0px 30px 10px rgba(0, 0, 0, .75)"
  });
  }
});