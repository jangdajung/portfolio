$(function () {
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });

  //nav
  $(".header_nav>ul>li").hover(
    function () {
      $(".sub_nav, .sub_back").stop().slideDown();
    },
    function () {
      $(".sub_nav, .sub_back").stop().slideUp();
    }
  );

  //slide

  // setInterval(function(){
  //     $(".slide_ul>ul").delay(2500);
  //     $(".slide_ul>ul").animate({marginLeft:-1905},500);
  //     $(".slide_ul>ul").delay(2500);
  //     $(".slide_ul>ul").animate({marginLeft: -3810},500);
  //     $(".slide_ul>ul").delay(2500);
  //     $(".slide_ul>ul").animate({marginLeft: -5715},500);
  // });

  // $(".slide_ul ul").css({left:" -1905px "})

  // function slide(){
  //     var i=0;
  //     var total = $(".slide_ul li").length-1; //남은 슬라이드 갯수
  //     var elementWidth = $(".slide_ul li").outerWidth();

  //     function nextIndex(){
  //         $(".right_arrow").click(function(){
  //             if(i < total ){ /* 0, 1, 2, 3 */
  //                 i++;
  //             }
  //             $(".slide_ul ul").stop().animate({left:-(elementWidth*i)},500);
  //             rolling();
  //         });
  //     };
  //     nextIndex()

  //     function prevIndex(){
  //         if(i > 0){
  //             i--;
  //             }
  //         rolling()
  //     }
  //     prevIndex();

  //     $(".rolling li").click(function(){
  //         i = $(this).index();
  //         rolling();
  //         $(".slide_ul ul").stop().animate({left:-(elementWidth*i)},500);
  //     })
  //     function rolling(){
  //         $(".rolling li").removeClass("on")
  //         $(".rolling li").eq(i).addClass("on")
  //     }

  //     // $(".slide_ul ul").css({"left":( -elementWidth*i) + " px "})
  // }
  // slide()

  /*
    $(".cont2_bottom .imgbox").mouseenter(function(){
        var current_image = $(this).find("img").attr("src");
        $("#section .cont2").css({backgroundImage:"url("+current_image+")"})
    })
    $(".cont2_bottom .imgbox").mouseleave(function(){
        $("#section .cont2").css({backgroundImage:"url(../imges/image/back3.jpg)"})
    })
    */

  // $(".cont2_bottom > div").hover(
  //     function(){
  //         var current_image = $(this).find("img").attr("src");
  //         $("#section .cont2").css({backgroundImage:"url("+current_image+")"})
  //     },
  //     function(){
  //         $("#section .cont2").css({backgroundImage:"url(../imges/image/back3.jpg)"})
  //     }
  // )

  // $(".cont2_bottom > div").hover(
  //     function(){
  //         var current_image = $(this).find("img").attr("src");
  //         $("#section .cont2").css({backgroundImage:"url(./imges/back/토마토bg.jpg)"})
  //     },
  //     function(){
  //         $("#section .cont2").css({backgroundImage:"url(../imges/image/back3.jpg)"})
  //     }
  // )

  /*
    var back_bg;
    $(".cont2_bottom > div").hover(
        function(){
            var t; // 경로를 저장하는 변수
            var i =  $(this).index();

            // console.log(current_image);
            if( i == 0 ){
                t = "./imges/back/토마토bg.jpg";
            }else if( i == 1){
                t = "./imges/back/치즈bg.jpg";
            }else if( i == 2){
                t = "./imges/back/계란bg.jpg";
            }

            $("#section .cont2").css({backgroundImage:"url("+ t +")"});
        },
        function(){
            back_bg = "../imges/image/back3.jpg";
            $("#section .cont2").css({backgroundImage:"url(" + back_bg + ")"}); //기본배경
        }
    )
    */

  $(".cont2_bottom > div").mousemove(function () {
    var t; // 경로를 저장하는 변수
    var i = $(this).index();

    // console.log(current_image);
    if (i == 0) {
      t = "./imges/back/토마토bg.jpg";
    } else if (i == 1) {
      t = "./imges/back/치즈bg.jpg";
    } else if (i == 2) {
      t = "./imges/back/계란bg.jpg";
    }

    $("#section .cont2").css({ backgroundImage: "url(" + t + ")" });
  });

  $(".cont2_inner").mouseleave(function () {
    var back_bg = "./imges/image/back3.jpg";
    $("#section .cont2").css({ backgroundImage: "url(" + back_bg + ")" });
  });
});
