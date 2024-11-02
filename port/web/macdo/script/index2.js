$(function(){
    $(".rolling li").eq(0).addClass("on");
    $(".slide_ul ul").eq(0).addClass("on");
    

    var i=0;
    var dis=0;
    $(".rolling li").click(function(e){
        e.preventDefault();
        clearInterval(cont1_intervalId)
        $(".rolling li").removeClass("on");
        $(this).addClass("on");
        
        i=$(this).index();
        dis =i*-1*100+"%";
        $(".slide_ul").css({left:dis});
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(i).addClass("on");
        cont1_intervalId = setInterval(cont1_fade,3000);
    });
    
    $(".right_arrow").click(function(e){
        e.preventDefault()
        if(i<3){
            i++;
        }
        else{
            i=0;
        }
        dis =i*-1*100+"%";
        $(".slide_ul").css({left:dis});
        // $(".slide_ul ul").eq(i).addClass("on");
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(i).addClass("on");
        // console.log(i)
    });
    $(".left_arrow").click(function(e){
        e.preventDefault()
        if(i>0){
            i--;
        }
        else{
            i=3;
        }
        dis =i*-1*100+"%";
        $(".slide_ul").css({left:dis});
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(i).addClass("on");
    });
    setInterval(function(){
        if(i<3){
            i++;
        }
        else{
            i=0;
        }
        dis =i*-1*100+"%";
        $(".slide_ul").css({left:dis});
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(i).addClass("on");
    },2000);

    let h = 0;
    let cont1_slideCount = $(".cont1_slide").find(".items").length-1;
    
    function cont1_fade(){
        if(h < cont1_slideCount){
            h++;
        }else{
            h = 0;
        }

        $(".cont1_slide").find(".items").fadeOut(1000);
        $(".cont1_slide").find(".items").eq(h).fadeIn(1000);
    }
    cont1_fade();

    let cont1_intervalId = setInterval(cont1_fade,3000);

});


// i++;
// $(".slide_ul ul").animate({marginLeft:"1905" *i},500);
// marginLeft 와 left 를 섞어서 쓰면 슬라이드가 정상작동하지 않는다

//marginLeft:"-1905" 는 단위가 없다

//left, right arrow 의 값은 반대여야 한다 (다른 방향으로 움직이기 위해)



