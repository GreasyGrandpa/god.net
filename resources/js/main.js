$(document).ready(function(){
  $('.aa').mouseenter(function (){
    $(this).children().animate({'width':'45%'}, 100);
    $(this).animate({'width':'90%'}, 100);
  });
  $('.aa').mouseleave(function () {
    $(this).children().animate({'width':'100%'}, 100);
    $(this).animate({'width':'40%'}, 100);
  });
  $('.aal').mouseenter(function (){
    $(this).children().animate({'width':'45%'}, 100);
    $(this).animate({'width':'90%'}, 100);
  });
  $('.aal').mouseleave(function () {
    $(this).children().animate({'width':'100%'}, 100);
    $(this).animate({'width':'40%'}, 100);
  });
});
