$(window).on("load",function(){
    $(".animate").fadeOut();
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

      $(".button").on("click",function (e) {

        e.preventDefault();
         
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }

        function text(elem) {
            var regex = /^[a-zA-Z ]{1,30}$/;
            return regex.test(elem);
        }
          
          function validate() {
            var email = $(".email").val();
            var name = $(".name").val();
            var subject = $(".subject").val();
            var textarea = $("textarea").val();
          
            if (!validateEmail(email)) {
                $(".email").css("border-bottom","1px solid red");
            }else{
                $(".email").css("border-bottom","1px solid white")
            }

            if (!text(name)) {
                $(".name").css("border-bottom","1px solid red");
            }else{
                $(".name").css("border-bottom","1px solid white")
            }

            if (!text(subject)) {
                $(".subject").css("border-bottom","1px solid red");
            }else{
                $(".subject").css("border-bottom","1px solid white")
            }

            if (textarea == "" || textarea == " ") {
                $("textarea").css("border-bottom","1px solid red");
            }else{
                $("textarea").css("border-bottom","1px solid white")
            }

            if (validateEmail(email) && text(name) && text(subject) && !textarea == "" && !textarea == " ") {
                $(".back").css("display","block");
                $(".exit").css("display","block");
                $(".add").css("display","block");
                $(".email").val("");
                $(".name").val("");
                $(".subject").val("");
                $("textarea").val("");
                $("body").css({"height":"100vh","overflow":"hidden"})
            }
            return false;
          }
          validate();

          $(".exit").on("click",function(){

            $("body").css({"height":"","overflow":""});
            $(".back").css("display","none");
            $(".exit").css("display","none");
            $(".add").css("display","none");
          })
          
    
    });
    });