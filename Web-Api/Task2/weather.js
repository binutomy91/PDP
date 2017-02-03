var geoSuccess = function(position) {

    var date = new Date();
    var month = date.getMonth()+1;

    var lat = Math.round(position.coords.latitude);
    var lon = Math.round(position.coords.longitude);

    var seasons = {
      summer:[6,7,8],
      autumn:[9,10,11],
      winter:[12,1,2],
      spring:[3,4,5]
    };


  };

  navigator.geolocation.getCurrentPosition(geoSuccess);


// navigator.geolocation.getCurrentPosition(function(location){

//     var latitude  = location.coords.latitude;
//     var longitude = location.coords.longitude;
//     var accuracy = location.coords.accuracy;

//     console.log(latitude + ' ' + longitude + ' '+ accuracy);
// });


// function geoFindMe() {
//   var output = document.getElementById("out");

//   if (!navigator.geolocation){
//     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//     return;
//   }

//   function success(location) {
//     var latitude  = location.coords.latitude;
//     var longitude = location.coords.longitude;

//     output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

//     var img = new Image();
//     img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

//     output.appendChild(img);
//   };

//   function error() {
//     output.innerHTML = "Unable to retrieve your location";
//   };

//   output.innerHTML = "<p>Locating…</p>";

//   navigator.geolocation.getCurrentPosition(success, error);
// }


// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
// if ("geolocation" in navigator) {
//   $('.js-geolocation').show(); 
// } else {
//   $('.js-geolocation').hide();
// }

// /* Where in the world are you? */
// $('.js-geolocation').on('click', function() {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
//   });
// });

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
// $(document).ready(function() {
//   loadWeather('London',''); //@params location, woeid
// });

// function loadWeather(location, woeid) {
//   $.simpleWeather({
//     location: location,
//     woeid: woeid,
//     unit: 'f',
//     success: function(weather) {
//       html = '<h2>'+weather.alt.temp+'&deg;C</h2>';
//       html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
//       html += '<li class="currently">'+weather.currently+'</li>'; 
      
//       $("#weather").html(html);
//     },
//     error: function(error) {
//       $("#weather").html('<p>'+error+'</p>');
//     }
//   });
// }
