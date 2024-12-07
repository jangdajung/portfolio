$(function () {
  // 해상도 변화시 자동 새로고침
  $(window).resize(function () {
    location.reload();
  });

  /* 마우스 움직이면 따라다니기 */
  $(window).mousemove(function (e) {
    let cursorX = e.clientX; /* 현재 화면 x 위치*/
    let cursorY = e.clientY; /* 현재 화면 y 위치 */

    $("#custom_cursor").css({
      top: cursorY,
      left: cursorX,
    });
  });

 $(".pop").mouseenter(function(){
    $("#custom_cursor").removeClass();
  });
 $(".btn").mouseenter(function(){
    $("#custom_cursor").removeClass();
  });

  $("#design1").mouseenter(function(){
    $("#custom_cursor").addClass("click_cursor");
  });
  $("#design1").mouseleave(function(){
    $("#custom_cursor").removeClass("click_cursor");
  });
 
  $("#web").mouseenter(function(){
    $("#custom_cursor").addClass("drag_cursor")
  });
  $("#web").mouseleave(function(){
    $("#custom_cursor").removeClass("drag_cursor")
  });

  // $("#web .buttonInner a").mouseenter(function(){
  //   $("#custom_cursor").addClass("click_cursor");


  // });



  // a 태그 href 속성에 #만 있다면 기본 클릭 이벤트 막기
  $("a[href='#']").on("click", function (e) {
    e.preventDefault();
  });

  // nav
  $(".navBtn").click(function () {
    $("header nav").addClass("on");
  });
  $(".navIn>span").click(function () {
    $("header nav").removeClass("on");
  });
  var w = $(window).width();
  $(window).resize(function () {
    window.location.reload();
    w = $(this).width();
  });
  if (w >= 768) {
    $(".navIn>span").click();
  }
  let main_top = $(".main").offset().top - 50;
  $(window).scroll(function () {
    var t = $(this).scrollTop();
    if (t > main_top) {
      $(".section").addClass("on");
    } else {
      $(".section").removeClass("on");
    }
  });

  $(".section li").click(function () {
    $(".section li").removeClass("on");
    $(this).addClass("on");
  });

  /* #design1 (start) ****************************************/

          var design1 = new Swiper("#design1 .contWrap", {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 40,
            autoplay: {
              delay: 3000
            },

            loop : true,
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            // 반응형 스와이퍼 
            breakpoints: {
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // 768: {
              //   slidesPerView: 2,
              //   spaceBetween: 40,
              // },
              // 1024: {
              //   slidesPerView: 3,
              //   spaceBetween: 50,
              // },
            },     
          });
          // pop
      $("#design1 .cont li a").click(function (e) {
        e.preventDefault();
        design1.autoplay.stop();
        $(this).siblings(".pop").css({ display: "block" });
      });
      $("#design1 .pop button").click(function () {
        design1.autoplay.start();
        $(".pop").css({ display: "none" });
        $("#design1 .btn .control li").removeClass("on");
        $("#design1 .btn .control .start").addClass("on");
      });
      $("#design1 .pop").click(function (event) {
        if (event.target === this) {
          design1.autoplay.start();
          $(".pop").css({ display: "none" });
        }
      });

          

  /* #design1 (end) ****************************************/

  /* #web(start) ****************************************/
  var web = new Swiper(".web", {
    pagination: {
      el: ".web .swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".web .swiper-button-next",
      prevEl: ".web .swiper-button-prev",
    },
  });
    /* #web(end) ****************************************/


  $("#dpage .cont1 li").hover(
    function () {
      $(this).find(".dim").hide();
      $(this).find(".dim").show();
    },
    function () {
      $(this).find(".dim").show();
      $(this).find(".dim").hide();
    }
  );
});
