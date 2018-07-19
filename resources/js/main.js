$(document).ready(function(){
  $('.a').mouseenter(function (){
    $(this).animate({'padding-left':'50%'}, 1000);
    });
  $('.a').mouseleave(function () {
    $(this).animate({'padding-left':'0'}, 1000)
  });
  $('.al').mouseenter(function (){
    $(this).animate({'padding-right':'50%'}, 1000);
    });
  $('.al').mouseleave(function () {
    $(this).animate({'padding-right':'0'}, 1000)
  });
});
