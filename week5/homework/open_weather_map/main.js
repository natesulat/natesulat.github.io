/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/


$(document).ready(function () {
  var apiKey = '22dda68ed14d5d2600ff5a5446627830';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q={New York City}&units=imperial&appid=' + apiKey;
  $.ajax({
  	url: weatherUrl,
  	type: 'GET',
  	success: function(res) {
  		console.log(res);
  		$('#nyc-weather').append('Temperature: ' + Math.round(res.main.temp) + '° F || Humidity: ' + res.main.humidity + '% || Wind Speed: ' + res.wind.speed + 'mph');
  	},
  	error: function(res) {
  		console.log('error');
  	}
  });

  $('#enter-a-city').submit(function() {
  	var city = $('#city-input').replace(/\s/g, '').toLowerCase();
  	var state = $('#state-input').toLowerCase();
  	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state + '&units=imperial&appid=' + apiKey;
  	if (city && state) {
  		$.ajax({
  			url: url,
  			type: 'GET',
  			succes: function(res) {
  				// summin
  			},
  			error: function(res) {
  				// summin
  			}
  		});
  	} else {
  		// summin, though maybe just use REQUIRED attribute
  	}
  })
});

