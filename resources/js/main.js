$(document).ready(function(){
  $('.aa').mouseenter(function (){
    $(this).animate({'width':'90%'}, 1000);
    $(this).children('.fa').delay(670).fadeIn();
    $(this).children('.fa').delay(1000).css('margin-right','40%');
  });
  $('.aa').mouseleave(function () {
    $(this).animate({'width':'40%'}, 1000);
    $(this).children('.fa').css('display','none');
    $(this).children('.fa').css('margin-right','0');
  });
  $('.aal').mouseenter(function (){
    $(this).animate({'width':'90%'}, 1000);
    $(this).children('.fa').delay(670).fadeIn();
    $(this).children('.fa').delay(1000).css('margin-left','40%');
  });
  $('.aal').mouseleave(function () {
    $(this).animate({'width':'40%'}, 1000);
    $(this).children('.fa').css('display','none');
    $(this).children('.fa').css('margin-right','0');
  });
});
