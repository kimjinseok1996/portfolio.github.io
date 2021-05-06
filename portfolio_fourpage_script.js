$(function(){
    var fourpagetop = $("#fourpage").offset().top;
    var windowtop = 0;
    $(window).scroll(function(){
        windowtop = $("body,html").scrollTop();
        if(windowtop > fourpagetop-300 && windowtop < fourpagetop){
            $("#github_title p").css({"color":"red"});
            
            setTimeout(function(){
                $("#fourpage #pointercusor img").css({"transform":"rotate(90deg)"});
            },300);
            setTimeout(function(){
                $("#fourpage_screenon").css({"opacity":"0.9"});
            },1000);
        }
    });
    $("#fourpagetopbtn").on("click",function(){
        $("body,html").animate({"scrollTop":"0"},1000);
    });
            $("#geer1btn").addClass("geeron");
            $("#geer1btn").on("click",function(){
                $(".geerbtn").removeClass("geeron");
                $("#geer1btn").addClass("geeron");
                $(".pistonetop img, .pistonemiddle img, .pistonebottom img").css({"animation-duration":"0.6s"});
                $("#enginetopni1 img, #enginetopni2 img").css({"animation-duration":"1.5s"});
            });
            $("#geer2btn").on("click",function(){
                $(".geerbtn").removeClass("geeron");
                $("#geer2btn").addClass("geeron");
                $(".pistonetop img, .pistonemiddle img, .pistonebottom img").css({"animation-duration":"0.4s"});
                $("#enginetopni1 img, #enginetopni2 img").css({"animation-duration":"1s"});
            });
            $("#geer3btn").on("click",function(){
                $(".geerbtn").removeClass("geeron");
                $("#geer3btn").addClass("geeron");
                $(".pistonetop img, .pistonemiddle img, .pistonebottom img").css({"animation-duration":"0.2s"});
                $("#enginetopni1 img, #enginetopni2 img").css({"animation-duration":"0.5s"});
            });
        
});