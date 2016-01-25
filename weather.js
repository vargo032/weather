// Dollar sign is just another way of saying jQuery function
// function prepareEventHandlers(){

$(function() {
  var handleWeatherResponse = function(data) {

    console.log(data);

var markup = "The weather in Chicago is: " +
      data.currently.summary //+ ". The weather tomorrow is: " + " " +
        // data.daily.summary + " The weather tomorrow is: " + " " +
        // data.hourly.summary + " " +
        // data.daily.data[0].dewPoint
      +
        // Three day forcast below this line
        ". Weather tomorrow will be: " + data.daily.data[0].summary + " " +
        "The following day will be: " + data.daily.data[1].summary + " " +
        " The following day will be: " + data.daily.data[2].summary + " " +
        " The following day will be: " + data.daily.data[3].summary + " "

      // data.daily.data[5].time

    // $('.weather-report').html(threeday);
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
// }
// window.onload = function() {
//   prepareEventHandlers();
//
// }
