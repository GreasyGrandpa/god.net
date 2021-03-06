$(document).ready(function(){
  //moving buttons on first banner
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
  $('.button').mouseenter(function(){
    $(this).children().finish();
    $(this).children().animate({'font-weight':'bold','font-size':'1.5rem'}, 200);
  });
  $('.button').mouseleave(function(){
    $(this).children().finish();
    $(this).children().animate({'font-weight':'normal','font-size':'1rem'}, 200);
  });
  //weather button
  $('.button').click(function(){
    var state = $('.state-input').val();
    var city = $('.city-input').val();
    var url = 'https://api.wunderground.com/api/4e1fe0d302980707/geolookup/conditions/q/' + state + '/' + city + '.json';
    $.ajax({
     url: url,
     datatype: 'jsonp',
     success: function(data){
       $('.righta .conditiona .value').html('<p class="data">' + data.current_observation.weather + '</p>');
       $('.righta .temp .value').html('<p class="data">' + data.current_observation.temp_f + '</p>')
       $('.righta .humidity .value').html('<p class="data">' + data.current_observation.relative_humidity + '</p>')
     }});
     var weather = $('.data').val();
     $('.conditiona').fadeIn();
     $('.conditiona').css('display','inline-flex');
     $('.temp').fadeIn();
     $('.temp').css('display','inline-flex');
     $('.humidity').fadeIn();
     $('.humidity').css('display','inline-flex');
     $('.state-input').val('');
     $('.city-input').val('');
  });
  //second button
});
