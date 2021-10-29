$(document).ready(function(){
    $(".nav>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav>li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    });
    
    var len = 3;
    var i = 0;
    var slidePos;
    
    setInterval(function(){
        if(i < len-1){
            i++;
        } 
        else {
            i = 0;
        }
        /*
        $(".slide>img").fadeOut();
        $(".slide>img").eq(i).fadeIn();
        */
        slidePos = i * (-300) + "px";
        $(".slide").animate({top: slidePos}, 400)
    }, 2000);
    
    $(".name li").click(function(){
        var list = $(this).index();
        $(".name li").removeClass("on");
        $(".name li").eq(list).addClass("on");
        $(".table div").hide();
        $(".table div").eq(list).show();
    });
    /*
    $(".note p > a").click(function(){
        $(".pop").show();
    });
    $(".pop .close").click(function(){
        $(".pop").hide();
    });
    */
});