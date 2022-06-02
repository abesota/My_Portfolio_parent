'use strict';

{
  // ハンバーガーメニュー
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () { 
    ham.toggleClass('active'); 
    nav.toggleClass('active');
  });

  $(window).on('scroll load', function(){        
    var scroll = $(this).scrollTop();        
    var windowHeight = $(window).height();      
    $('.fadeIn').each(function(){              
      var cntPos = $(this).offset().top;     
      if(scroll > cntPos - windowHeight + windowHeight / 3){  
        $(this).addClass('active');             
      }
    });
  });
  // ハンバーガーメニュー

  // カーソルの設定
  $(function(){
    var cursor=$("#cursor");
    var stalker=$("#stalker");
 
    $(document).on("mousemove",function(e){
      //カーソルの座標位置を取得
      var x=e.clientX;
      var y=e.clientY;
      //カーソル要素のcssを書き換える用
      cursor.css({
        "opacity":"0.9",
        "top":y+"px",
        "left":x+"px"
      });
      //ストーカー要素のcssを書き換える用    
      setTimeout(function(){
        stalker.css({
          "opacity":"0.4",
          "top":y+"px",
          "left":x+"px"
        });
      },140);
    });

    $(".img_text, .sk_lang, .scb, main a, #top").on({
      "mouseenter": function() {

        cursor.addClass("active");
        stalker.addClass("active");
      },
      "mouseleave": function() {
        cursor.removeClass("active");
        stalker.removeClass("active");
        
      }
    });
  });
  // カーソルの設定

  // アコーディオンメニュー
  const shows = document.querySelectorAll('.sk_lang');

  shows.forEach(show => {
    show.addEventListener('click', () => {
      show.parentNode.classList.toggle('appear');

      shows.forEach(el => {
        if (show !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
  // アコーディオンメニュー

  // トップスクロール
  const top =document.getElementById('top');

  function topscrollCallback(entries) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        top.classList.add('scrolled');
      }else{
        top.classList.remove('scrolled');
      }
    });
  }
  const topScrollObserver = new IntersectionObserver(topscrollCallback);
  topScrollObserver.observe(document.getElementById('target'));
  // トップスクロール
}


