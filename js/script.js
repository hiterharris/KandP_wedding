$(document).ready(function(){
  $("#scrollNav").hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
            $("#scrollNav").fadeIn();
        } else {
            $("#scrollNav").fadeOut();
        }
      });
  });
