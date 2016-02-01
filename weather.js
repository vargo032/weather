// Dollar sign is just another way of saying jQuery function
// function prepareEventHandlers(){

$(function() {
  var handleWeatherResponse = function(data) {

    console.log(data);

var markup = "<H3>The weather in Chicago is: </H3>" + data.currently.summary +
            " while the current temperature is " + data.currently.apparentTemperature + ". " +
            "<H3>Tomorrow </H3>" + "will be a low of " + data.daily.data[0].apparentTemperatureMin + " and a high of " + data.daily.data[0].apparentTemperatureMax + " and " +data.daily.data[0].summary
            + "<h3> The following day </h3>" + "will be a low of "+ data.daily.data[1].apparentTemperatureMin + " and a high of " + data.daily.data[1].apparentTemperatureMax + " and " + data.daily.data[1].summary +
            "<h3> The day after </h3>" + "will be a low of " + data.daily.data[2].apparentTemperatureMin + " and a high of " + data.daily.data[2].apparentTemperatureMax + " and " + data.daily.data[2].summary
            + "<h3> The fourth day </h3>" + "will be a low of " + data.daily.data[3].apparentTemperatureMin + " and a high of " + data.daily.data[3].apparentTemperatureMax + " and " + data.daily.data[3].summary

      $('.weather-report').html(markup);
  }
  // markup.style.fontWeight = "Bold";
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
