// Dollar sign is just another way of saying jQuery function
$(function() {
  var handleWeatherResponse = function(data) {
    weather = data;
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.
var markup = "the dewpoint for today is " +
      $('.weather-report').html(object.weather);
// typeof jQuery1113024792795721441507_1453669009070 === 'function' && jQuery1113024792795721441507_1453669009070

    // $('.weather-report').html(data.daily);

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
