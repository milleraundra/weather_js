function kelvinConverter(kelvin_input) {
  var kelvin = parseInt(kelvin_input);
  var fahrenheit = (1.8 * (kelvin-273)) + 32;
  return Math.round(fahrenheit);
};


$(document).ready(function() {
  $("#weatherTemperature").click(function(event) {
    event.preventDefault();
    var city = $("input#location").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
      $('.showWeather').text("The temperature in " + city + " is " + kelvinConverter(response.main.temp) + "°F")}).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
    });
  });

var apiKey = require('./../.env').apiKey;
var temperature = require('./../js/temperature-interface.js');

$(document).ready(function() {
  $("#weatherLocation").click(function(event) {
    event.preventDefault();
    var city = $("input#location").val();
    //use API key to do something
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
      console.log(JSON.stringify(response));
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%")}).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
    });
  });
