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

    $(".alone").on("click",function(){
      $("html").css("cursor","zoom-out");
      $(".cover").css("display","block");
      $(".coverimage").css({"display":"block","cursor":"default"}).attr("src",$(this).attr("value"));
      $(".exit").css("display","block");
     $("html").css({"margin": 0, "height": "100%", "overflow": "hidden"});
    })

$(".cover").click(function(event) {                    
      if(!$(event.target).closest('.coverimage').length)
      {
      $("html").css("cursor","default");
      $(".cover").css("display","none");
      $(".coverimage").css("display","none").attr("src","");
      $(".exit").css("display","none");
      $("html").css({"margin": 0, "height": "", "overflow": ""});               
      }
   }); 

   $(".navbar").animate({"margin-bottom":"0"},1000);

     $(".top").on("click",function(){
      $("html").animate({ scrollTop: 0 }, 1500);
    });
  });