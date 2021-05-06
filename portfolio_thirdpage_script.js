$(function(){
            var thirdpagetop = $("#thirdpage").offset().top;
            var windowtop = 0;
            var thirdpagetrue = true;
            $(window).scroll(function(){
            windowtop = $("body,html").scrollTop();
                if(windowtop > thirdpagetop-300 && windowtop < thirdpagetop){
                    if(thirdpagetrue == true){
                    $("#skill_title p").css({"color":"red"});

                    setTimeout(function(){
                        $("#thirdpage #pointercusor img").css({"transform":"rotate(30deg)"});
                    },300);

                    $(".skillbox .skillboxbarbox_bar_bar_gage").css({"background":"transparent"});

                    var skillboxgagenum1, skillboxgagenum2, skillboxgagenum3, skillboxgagenum4;
                    skillboxgagenum1=-1;
                    skillboxgagenum2=-1;
                    skillboxgagenum3=-1;
                    skillboxgagenum4=-1;
                    var skillboxgage1inter1, skillboxgage1inter2, skillboxgage1inter3, skillboxgage1inter4;

                    $(".skillbox .skillboxtopni >img").css({"transform":"rotate(180deg)","transition":"2s"});
                    skillboxgage1inter1 = setInterval(function(){
                        skillboxgagenum1 ++;
                         $("#skillbox1 .skillboxbarbox_bar_bar_gage").eq(skillboxgagenum1).css({"background":"#5cd400"});
                        if(skillboxgagenum1 == 8){
                            clearInterval(skillboxgage1inter1);
                        }
                    },200);
                    skillboxgage1inter2 = setInterval(function(){
                        skillboxgagenum2 ++;
                         $("#skillbox2 .skillboxbarbox_bar_bar_gage").eq(skillboxgagenum2).css({"background":"#5cd400"});
                        if(skillboxgagenum2 == 7){
                            clearInterval(skillboxgage1inter2);
                        }
                    },200);
                    skillboxgage1inter3 = setInterval(function(){
                        skillboxgagenum3 ++;
                         $("#skillbox3 .skillboxbarbox_bar_bar_gage").eq(skillboxgagenum3).css({"background":"#5cd400"});
                        if(skillboxgagenum3 == 4){
                            clearInterval(skillboxgage1inter3);
                        }
                    },200);
                    skillboxgage1inter4 = setInterval(function(){
                        skillboxgagenum4 ++;
                         $("#skillbox4 .skillboxbarbox_bar_bar_gage").eq(skillboxgagenum4).css({"background":"#5cd400"});
                        if(skillboxgagenum4 == 7){
                            clearInterval(skillboxgage1inter4);
                        }
                    },200);
                 }
                thirdpagetrue = false;
                }
            });
        });