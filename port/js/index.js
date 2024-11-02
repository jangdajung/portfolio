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
  let design1_slide = $("#design1 .contWrap .cont li").outerWidth(true);
  let design1_index = 0;
  let design_count = $("#design1 .contWrap .cont li").length - 1;

  // 삭제
  // $(window).resize(function(){
  //     clearInterval(design1_intervalId);
  //     design1_slide = $(this).width();
  //     $("#design1 .contWrap .cont").stop().animate({
  //         left: -design1_slide*design1_index,
  //     },0)
  //     design1_intervalId= setInterval(slideMove,3000);
  // })

  // 다음 슬라이드
  function nextSlide() {
    if (design1_index < design_count) {
      design1_index++;
    } else {
      design1_index = 0;
    }
  }

  // 현재 슬라이드, 롤링에만 class 적용
  $("#design1 .cont li").eq(design1_index).addClass("on");
  $("#design1 .rolling li").eq(design1_index).addClass("on");

  function design1_class() {
    $("#design1 .cont li").removeClass("on");
    $("#design1 .cont li")
      .eq(design1_index + 1)
      .addClass("on");
    $("#design1 .rolling li").removeClass("on");
    $("#design1 .rolling li").eq(design1_index).addClass("on");
  }

  // 슬라이드 움직이는 거리
  function slideMove() {
    nextSlide();
    $("#design1 .contWrap .cont")
      .stop()
      .animate(
        {
          left: -design1_slide * design1_index,
        },
        500
      );
    design1_class(); //클래스 toggle 함수
  }
  // 자동 슬라이드 + 정지 시키기 위해 변수에 저장
  let design1_intervalId = setInterval(slideMove, 4000);

  //맨앞, 맨뒤 가상요소 추가
  let current_width = $(window).width();
  if (current_width > 1280) {
    let design_item1 = $("#design1 .cont li").first().html(); //맨앞 슬라이드 저장
    let design_item2 = $("#design1 .cont li").last().html(); //맨뒤 슬라이드 저장

    function addElement() {
      $("#design1 .cont").prepend("<li>" + design_item2 + "</li>");
      $("#design1 .cont").append("<li>" + design_item1 + "</li>");
    }
    addElement();
  }

  // 롤링 클릭시 해당 슬라이드로 이동
  $("#design1 .rolling li").click(function () {
    clearInterval(design1_intervalId);
    design1_index = $(this).index();
    $("#design1 .contWrap .cont")
      .stop()
      .animate(
        {
          left: -design1_slide * design1_index,
        },
        0
      );

    design1_class(); //클래스 toggle 함수

    design1_intervalId = setInterval(slideMove, 3000);
  });

  $("#design1 .btn .control li").click(function () {
    $("#design1 .btn .control li").removeClass("on");
    $(this).addClass("on");
  });
  // 슬라이드 정지 버튼
  $("#design1 .btn .pause").click(function () {
    clearInterval(design1_intervalId);
  });

  // 슬라이드 재생 버튼
  $("#design1 .btn .start").click(function () {
    clearInterval(design1_intervalId);
    setTimeout(() => {
      slideMove();
      design1_intervalId = setInterval(slideMove, 3000);
    }, 500);
  });

  // pop
  $("#design1 .cont li a").click(function (e) {
    e.preventDefault();
    $(this).siblings(".pop").css({ display: "block" });
    clearInterval(design1_intervalId);
  });
  $("#design1 .pop button").click(function () {
    clearInterval(design1_intervalId);
    design1_intervalId = setInterval(slideMove, 1000);
    $(".pop").css({ display: "none" });
    $("#design1 .btn .control li").removeClass("on");
    $("#design1 .btn .control .start").addClass("on");
  });
  $("#design1 .pop").click(function (event) {
    if (event.target === this) {
      $(".pop").css({ display: "none" });
    }
    clearInterval(design1_intervalId);
    design1_intervalId = setInterval(slideMove, 3000);
    $("#design1 .btn .control li").removeClass("on");
    $("#design1 .btn .control .start").addClass("on");
  });

  if (w >= 768) {
    let current_src; //현재 hover 된 이미지 경로 저장할 변수
    let imgName; //확장자 없이 이미지의 이름만 저장할 변수

    $("#design1 .contWrap li").click(function () {
      current_src = $(this).find("a>img").attr("src"); //이미지 경로를 가져옴
      /* current_src =  ./img/post/up/sanmobile.jpg */
      imgName = current_src
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, ""); //파일 확장자 없이 이름만 추출
      /* imgNmae = sanmobile */
      console.log(imgName);
      $(this)
        .find(".pop img")
        .attr({ src: "./img/post/up/" + imgName + "_pc.jpg" });
      /* sanmobile_pc.jpg */
    });
  }

  /* #design1 (end) ****************************************/

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
