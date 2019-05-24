$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 900) {
      $('.skills').fadeIn();
    } else {
      $('.skills').fadeOut();
    }

    if (y > 100) {
        $('.typewriter').fadeIn();
      } else {
        $('.typewriter').fadeOut();
      }

      if (y > 900) {
        $('#chartdivskill').fadeIn();
      } else {
        $('#chartdivskill').fadeOut();
      }
});

  