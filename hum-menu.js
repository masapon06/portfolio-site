$(function(){
  $(".btn-gnavi").on("click", function(){
    //ハンバーガーメニューの位置を設定
    var rightVal = 0;
     if($(this) .hasClass("open")) {
       //[open]クラスを持つ要素はメニューを開いた状態に設定
       rightVal = -300;
       //メニューを開いたら次回クリック時は閉じた状態になるように設定
       $(this) .removeClass("open");
    }else {
      //[open]クラス持たない要素はメニューを閉じた状態に設定（rightValは０の状態）
      //メニューを閉じたら次回クリック時は開いた状態になるよう設定
      $(this) .addClass("open");
     }
     $("#global-navi").stop() .animate({
       right: rightVal
     }, 200);
  });
});
