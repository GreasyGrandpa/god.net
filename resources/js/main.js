$(document).ready(function(){
  $('.aa').mouseenter(function (){
    $(this).children('.fa').finish();
    $(this).finish();
    $(this).animate({'width':'90%'}, 1000);
    $(this).children('.fa').delay(1000).fadeIn();
    $(this).children('.fa').delay(1500).css('margin-right','40%');
  });
  $('.aa').mouseleave(function () {
    $(this).children('.fa').finish();
    $(this).animate({'width':'40%'}, 1000);
    $(this).children('.fa').css('display','none');
    $(this).children('.fa').css('margin-right','0');
  });
  $('.aal').mouseenter(function (){
    $(this).children('.fa').finish();
    $(this).finish();
    $(this).animate({'width':'90%'}, 1000);
    $(this).children('.fa').delay(1000).fadeIn();
    $(this).children('.fa').delay(1500).css('margin-left','40%');
  });
  $('.aal').mouseleave(function () {
    $(this).children('.fa').finish();
    $(this).animate({'width':'40%'}, 1000);
    $(this).children('.fa').css('display','none');
    $(this).children('.fa').css('margin-right','0');
  });
});
