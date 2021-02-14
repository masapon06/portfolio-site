$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href= $(this).attr("href");
      if (href=="#dantaigaiyou"){
        var target = $(href == "#" || href == "" ? 'html' : href);
        var adjust = 1020;
      }else{
    var target = $(href == "#" || href == "" ? 'html' : href);
    var adjust = 0;
      }
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
