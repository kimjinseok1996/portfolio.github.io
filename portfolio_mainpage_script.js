$(function(){
            window.onload = function(){
                setTimeout(function(){
                    scrollTo(0,0);
                },10);
            }     
            
            setTimeout(function(){
                $("#maintext_P").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(1)").css({"display":"block"});
                },300);
            },300);
            setTimeout(function(){
                $("#maintext_O").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(2)").css({"display":"block"});
                },300);
            },700);
            setTimeout(function(){
                $("#maintext_R").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(3)").css({"display":"block"});
                },300);
            },1400);
            setTimeout(function(){
                $("#maintext_T").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(4)").css({"display":"block"});
                },300);
            },1700);
            setTimeout(function(){
                $("#maintext_F").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(5)").css({"display":"block"});
                },300);
            },2000);
            setTimeout(function(){
                $("#maintext_O_2").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(6)").css({"display":"block"});
                },300);
            },2100);
            setTimeout(function(){
                $("#maintext_L").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(7)").css({"display":"block"});
                },300);
            },2200);
            setTimeout(function(){
                $("#maintext_I").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(8)").css({"display":"block"});
                },300);
            },2300);
            setTimeout(function(){
                $("#maintext_O_3").addClass("enter");
                setTimeout(function(){
                    $(".maintextbroken:nth-child(9)").css({"display":"block"});
                },300);
            },2400);
            setTimeout(function(){
                $(".namebelttopni img").addClass("belton");
                $("#mainpage .belt").addClass("belton");
                $("#mainpage_name").addClass("belton");
                $("#mainbtn").animate({"left":"5%"},1500);
                $("body").css({"overflow-y":"visible"});
                
                var mainpagetextshine = -1;
                setInterval(function(){
                    mainpagetextshine ++;
                    if(mainpagetextshine == 1){
                        $(".maintext").css({"color":"#e30000"});
                    }
                    if(mainpagetextshine == 2){
                        $(".maintext").css({"color":"#350000"});
                    }
                    if(mainpagetextshine == 3){
                        $(".maintext").css({"color":"#e30000"});
                    }
                    if(mainpagetextshine == 8){
                        $(".maintext").css({"color":"#350000"});
                    }
                    if(mainpagetextshine == 9){
                        $(".maintext").css({"color":"#e30000"});
                    }
                    if(mainpagetextshine == 50){
                        mainpagetextshine = 0;
                    }
                },200);
            },3000);
            setTimeout(function(){
                $("#mainpage_topni1 img, #mainpage_topni2 img").css({"animation-play-state":"running"});
            },5000);
            
            var piperotatenum = 0;
            var piperotatedeg =0;
            $("#toppiperotate").on("click",function(){
                piperotatenum ++;
                piperotatedeg += 120;
                $(this).css({"transform":"rotate("+piperotatedeg +"deg)"});
                if(piperotatenum == 3){
                    $("#smoke").css({"opacity":"1"});
                    setTimeout(function(){
                        $("#smoke").css({"opacity":"0"});
                    },1500);
                    piperotatenum = 0;
                }
            });
            var menunum=0;
            $("#mainbtn").on("click",function(){
                if(menunum==0){
                    menunum=1;
                    //$("#mainbtn").css({"display":"none"});
                    $("body").css({"overflow-y":"hidden"});
                    $("section").css({"background":"black"});
                    
                    $("#mainbtnboxtop").addClass("on");
                    $("#mainbtnboxbottom").addClass("on");
                    
                    $("#leftmenu").animate({"left":"0"},1500);
                    $("#rightmenu").animate({"right":"0"},1500);
                    
                    setTimeout(function(){
                        $("#topni2 img, #topni3 img").addClass("rotate1");
                        $("#topni2 img, #topni3 img").removeClass("rotate2");
                        setTimeout(function(){
                            $("#mainbtn").css({"display":"block"});
                            menunum=2;
                        },1600);
                    },1650);                   
                }
                else if(menunum==2){
                    menunum=1;
                    //$("#mainbtn").css({"display":"none"});
                    $("body").css({"overflow-y":"visible"});
                    $("#mainpage").css({"background":"#3b3b3b"});
                    $("#secondpage").css({"background":"#2e2e2e"});
                    $("#thirdpage").css({"background":"#454545"});
                    $("#fourpage").css({"background":"#393939"});
                    //$(".maintext").css({"color":"#350000", "transition":"1.5s"});
                    
                    $("#mainbtnboxtop").removeClass("on");
                    $("#mainbtnboxbottom").removeClass("on");
                    
                    $("#topni2 img, #topni3 img").addClass("rotate2");
                    $("#topni2 img, #topni3 img").removeClass("rotate1");
                    
                    setTimeout(function(){
                        $("#leftmenu").animate({"left":"-100%"},1500);
                        $("#rightmenu").animate({"right":"-100%"},1500);
                        setTimeout(function(){
                            $("#mainbtn").css({"display":"block"});
                            menunum=0;
                        },1600);
                    },1650); 
                }
            });
            $(".menurightbox p a").on("click",function(){
                menunum=1;
                        //$("#mainbtn").css({"display":"none"});
                        $("body").css({"overflow-y":"visible"});
                        $("#mainpage").css({"background":"#3b3b3b"});
                        $("#secondpage").css({"background":"#2e2e2e"});
                        $("#thirdpage").css({"background":"#454545"});
                        $("#fourpage").css({"background":"#393939"});
                        //$(".maintext").css({"color":"#350000", "transition":"1.5s"});

                        $("#mainbtnboxtop").removeClass("on");
                        $("#mainbtnboxbottom").removeClass("on");

                        $("#topni2 img, #topni3 img").addClass("rotate2");
                        $("#topni2 img, #topni3 img").removeClass("rotate1");

                        setTimeout(function(){
                            $("#leftmenu").animate({"left":"-100%"},1500);
                            $("#rightmenu").animate({"right":"-100%"},1500);
                            setTimeout(function(){
                                $("#mainbtn").css({"display":"block"});
                                menunum=0;
                            },1600);
                        },1650); 
                    });
    
            $("#menurightbox2 p a").hover(function(){
                $("#menuleftbox2 p").css({"color":"red"});
            },function(){
                $("#menuleftbox2 p").css({"color":"#660000"});
            });
            $("#menurightbox4 p a").hover(function(){
                $("#menuleftbox4 p").css({"color":"red"});
            },function(){
                $("#menuleftbox4 p").css({"color":"#660000"});
            });
            $("#menurightbox6 p a").hover(function(){
                $("#menuleftbox6 p").css({"color":"red"});
            },function(){
                $("#menuleftbox6 p").css({"color":"#660000"});
            });
            $("#menurightbox8 p a").hover(function(){
                $("#menuleftbox8 p").css({"color":"red"});
            },function(){
                $("#menuleftbox8 p").css({"color":"#660000"});
            });
            
        });