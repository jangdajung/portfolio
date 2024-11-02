$(function(){
    //지혜쓰
     //.realtime_soar_keyword
     var h=$(".keyword").height(); //30
     var n=$(".keyword ul li").length; //10
     var hn=h*n //300
     var m=0;
     function rolling(){
         m+=h; //0+30
         $(".keyword ul").animate({"top":-m},600,function(){
             if(m>=hn){ //30>=300
                 $(this).css({"top":0});
                 m=0;
             }
         });
         $(".keyword ul").append($(".keyword ul li:eq(0)").clone());
     }
     setInterval(rolling,3000);
     //main_slide
     var num=0;
     var dis=0;
     $(".next").click(function(e){
         e.preventDefault();
         if(num<3){
             num++;
         }
         else{
             nnum=0;
         }
         sMv();
     });
     $(".prev").click(function(e){
         e.preventDefault();
         if(num>0){
             num--;
         }
         else{
             num=3;
         }
         sMv();
     });
     $(".rolling li").click(function(e){
         e.preventDefault();
         num=$(this).index();
         sMv();
     });
     setInterval(function(){
         if(num<3){
             num++;
         }
         else{
             num=0;
         }
         sMv();
     },3000);
     function sMv(){
         dis=num*(-1)*100+"%";
         $(".slide ul").animate({marginLeft:dis});
         $(".rolling li").removeClass("on");
         $(".rolling li").eq(num).addClass("on");
     }
    
     $(".chart").hover(function(){
        $(this).find(".dim").hide();
        $(this).find(".dim").show();
    },function(){
        $(this).find(".dim").show();
        $(this).find(".dim").hide();
    });



    
    
    
    // 다정쓰
    $(".cont1 ul").bxSlider({
        minSlides: 4,
        maxSlides: 5,
        slideWidth: 400,
        slideMargin: 20,
        ticker: true,
        speed: 12000
    });
    $('.cont2 ul').bxSlider({
        minSlides: 4,
        maxSlides: 5,
        slideWidth: 400,
        slideMargin: 20,
        ticker: true,
        speed: 9000
    });


    //서문쓰
    $(function(){
        var n=0; 
        var page = 1;
        var lastPage = $(".wrap>section").length;
        
        $(".aside li").eq(0).addClass("on");
        $("html").animate({scrollTop:0},10);
        $(window).on("wheel", function(e){
            
            if($("html").is(":animated")) return; //html이 움직이는 동안에 값을 받지X
         
            if(e.originalEvent.deltaY > 0){ // 휠이 움직였을 때 값, 휠을 내렸다
                if(n < lastPage-1){
                    n++;
                }
                if(page== lastPage) return;
         
                page++;
            }else if(e.originalEvent.deltaY < 0){ //휠을 올렸다
                if(n > 0){
                    n--;
                }
                if(page == 1) return;

                page--;
            }
            var posTop = (page-1) * 1080;
            
            console.log(n)
            console.log(lastPage)
            console.log(page)
            // console.log(posTop)
            $("html").animate({scrollTop : posTop},500);
        });

        $(".aside li a").click(function(e){
            e.preventDefault();
            n=$(this).parent("li").index();
            page = n;
            $(".aside li").removeClass("on");
            $(".aside li").eq(n).addClass("on");
            var posTop = (page) * 1080;
            $("html").animate({scrollTop : posTop},500);
        });


        $(window).scroll(function(){
            var scroll = $("html").scrollTop();

            if(scroll <= 0 && scroll < 1080){
                $(".aside li").removeClass("on");
                $(".aside li").eq(0).addClass("on");
            }else if(scroll >= 1080 && scroll < 2160 ){
                $(".aside li").removeClass("on");
                $(".aside li").eq(1).addClass("on");
            }else if(scroll >= 2160 && scroll < 3240 ){
                $(".aside li").removeClass("on");
                $(".aside li").eq(2).addClass("on");
            }else if(scroll >= 3240 && scroll < 4320 ){
                $(".aside li").removeClass("on");
                $(".aside li").eq(3).addClass("on");
            }else if(scroll >= 4320 ){
                $(".aside li").removeClass("on");
                $(".aside li").eq(4).addClass("on");
            }
        })


        
        
        
    });
});
