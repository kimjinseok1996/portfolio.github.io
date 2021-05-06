$(function(){
    var secondpagetop = $("#secondpage").offset().top;
            var windowtop = 0;
            $(window).scroll(function(){
                windowtop = $("body,html").scrollTop();
                
                if(windowtop > secondpagetop-300 && windowtop < secondpagetop){
                    
                    $("#about_title p").css({"color":"red"});

                    setTimeout(function(){
                        $("#secondpage_career_title p, #secondpage_certification_title p").css({"color":"red"});
                    },100);
                    setTimeout(function(){
                        $("#secondpage_career_title p, #secondpage_certification_title p").css({"color":"#660000"});
                    },200);
                    setTimeout(function(){
                        $("#secondpage_career_title p, #secondpage_certification_title p").css({"color":"red"});
                    },1200);
                    setTimeout(function(){
                        $("#secondpage_career_title p, #secondpage_certification_title p").css({"color":"#660000"});
                    },1300);
                    setTimeout(function(){
                        $("#secondpage_career_title p, #secondpage_certification_title p").css({"color":"red"});
                    },2000);
                    $(".secondpage_belttopni img").addClass("belton");
                    $("#secondpage .belt").addClass("belton");
                    $(".secondpage_career").addClass("belton");
                    $(".secondpage_certification").addClass("belton");

                    setTimeout(function(){
                        $("#secondpage #pointercusor img").css({"transform":"rotate(-30deg)"});
                    },300);
                    
            }
    });
            
});