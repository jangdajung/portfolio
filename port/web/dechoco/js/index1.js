$(function(){

      //slide

  setInterval(function(){
      $(".slideWrap ul").delay(2500);
      $(".slideWrap ul").animate({marginLeft:-1920},500);
      $(".slideWrap ul").delay(2500);
      $(".slideWrap ul").animate({marginLeft: -3840},500);
      $(".slideWrap ul").delay(2500);
      $(".slideWrap ul").animate({marginLeft: -5760},500);
  });

    $("a[href='#']").on("click",function(e){
        e.preventDefault();
    })

    $(".subMenu, .sub_bg").stop().slideUp();

    $(".gnb > li").on("mouseenter", function(){
        $(".subMenu, .sub_bg").stop().slideDown();
    })
    $("#nav").on("mouseleave", function(){
        $(".subMenu, .sub_bg").stop().slideUp();
    })

    let cont_gap = 500;
    let cont1 = $(".cont1").offset().top - cont_gap;
    let cont2 = $(".cont2").offset().top - cont_gap;
    let cont3 = $(".cont3").offset().top - cont_gap;
    let cont4 = $(".cont4").offset().top - cont_gap;
    // console.log(cont1)

    $(window).scroll(function(){
        let current_scrollTop = $(this).scrollTop();
        // console.log(current_scrollTop)
        if(current_scrollTop >= cont1){
            $(".cont1").addClass("on");
        }else{
            $(".cont1").removeClass("on");
        }

        if(current_scrollTop >= cont2){
            $(".cont2").addClass("on");
        }else{
            $(".cont2").removeClass("on");
        }

        if(current_scrollTop >= cont3){
            $(".cont3").addClass("on");
        }else{
            $(".cont3").removeClass("on");
        }
        
        if(current_scrollTop >= cont4){
            $(".cont4").addClass("on");
        }else{
            $(".cont4").removeClass("on");
        }
    })


    let cont2_li_total = $(".cont2 ul li").length;
    let sec = 0.1;
    // console.log(cont2_li_total)
    for(i=0; i<cont2_li_total; i++){
        $(".cont2 ul li").eq(i).css({
            transitionDelay: (sec*i)+"s"
        })
    }

    let cont3_li_total = $(".cont3 ul li").length;
    // console.log(cont2_li_total)
    for(i=0; i<cont3_li_total; i++){
        $(".cont3 ul li").eq(i).css({
            transitionDelay: (sec*i)+"s"
        })
    }

    let cont4_li_total = $(".cont4 ul li").length;
    // console.log(cont2_li_total)
    for(i=0; i<cont4_li_total; i++){
        $(".cont4 ul li").eq(i).css({
            transitionDelay: (sec*i)+"s"
        })
    }

    $(".slideWrap")
})