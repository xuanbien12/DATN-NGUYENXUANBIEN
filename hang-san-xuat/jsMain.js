$(document).ready(function(){
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        if(scrollPosition > 100){
            $("header").addClass("site-header")
            $(".rs-navbar-b").css('display','none')
            $(".search").addClass("d-n")
           
        }else {
            $("header").removeClass("site-header")
            $(".rs-navbar-b").css('display','block')
            $(".search").removeClass("d-n")
           
        }
    });
    
    $(".toggle1").on("click" , function(){
        $(".toggle1-perform").toggle()
    })
    $(".toggle2").on("click" , function(){
        $(".toggle2-perform").toggle()
    })
    $(".toggle3").on("click" , function(){
        $(".toggle3-perform").toggle()
    })
    $(".toggle4").on("click" , function(){
        $(".toggle4-perform").toggle()
    })
    $(".toggle5").on("click" , function(){
        $(".toggle5-perform").toggle()
    })
    $(".rp-bars-st").on("click",function(){
        $(".show-list").css("left","0")
        $(".xmark").css("right","0")
   })
   $(".xmark").on("click", function(){
       $(".show-list").css("left","-100%")
   })
})