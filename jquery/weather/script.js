// //geolocation via freecodecamp exercise
// $(document).ready(function(){
// // if (navigator.geolocation){
// //     navigator.geolocation.getCurrentPosition(function(position){
// //       $("#geoLoc").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
// //     });
// // }
//     navigator.geolocation.getCurrentPosition(function(location) {

//         var latitude  = location.coords.latitude;
//         var longitude = location.coords.longitude;
//         // var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude;

//         // $.getJSON(weatherURL).done(function(data){
//         //      $('#currTemp').html("current temp: " + data.main.temp);
//         // });
//     });

// });

$(document).ready(function() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?';
  var appID = 'b11c7b33ce8e8e12ecf30c57a7083f5f';
  var lat = '';
  var lon = '';

  $.getJSON('http://ip-api.com/json', function(loc) {
    //$('#data').html(loc.lon);
    lon = loc.lon;
    lat = loc.lat;
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?APPID=' + appID + '&lat=' + lat + '&lon=' + lon+ '&units=metric', function(weather) {
      console.log(weather)
      $('#data').html(weather.main.temp);
    });

  });

});
