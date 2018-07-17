$(document).ready(function(){
  $('p').css('color', 'red');
  $('p').click(function(){
    $(this).append(' baby');
  });
});
