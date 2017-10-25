$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
            $("#scrollNav").fadeIn();
        } else {
            $("#scrollNav").fadeOut();
        }
      });
  });
