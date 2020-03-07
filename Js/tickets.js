$(window).on("load",function(){
    $(".animate").fadeOut();
});

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});


$(document).ready(function(){
    $(window).on("scroll",function(){

        if ($(this).scrollTop() > 50) {
          $(".top").css({"opacity":1});
        }else{
          $(".top").css({"opacity":0});
        }

      })

       $(".top").on("click",function(){
        $("html").animate({ scrollTop: 0 }, 1500);
      });

      $(".navbar").animate({"margin-bottom":"0"},1500);
    });