$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          $('#snake').animate({
            left: "-=50px"
          }, 'fast');
          break;

        case 39: // right
          $('#snake').animate({
            left: "+=50px"
          }, 'fast');
          break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });