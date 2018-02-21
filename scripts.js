//vars
var darkskyKey = '841e534fb31d0704d2286fa1e12346cf';

//Getting users position:
window.onload = function findLocation() {
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
      latitude = document.getElementById('startLat').innerHTML = startPos.coords.latitude.toFixed(4);
      longitude = document.getElementById('startLon').innerHTML = startPos.coords.longitude.toFixed(4);
}};
    //Request to Darksky.net:

var weather = {};
function getWeather(url) {
      $.ajax({
        method: GET,
        url: "'https://api.darksky.net/forecast/' + darkskyKey + '/' + latitude + ',' + longitude",
        crossDomain: true,
        dataType: "jsonp",
        statusCode: {
          404: function() {
            alert( "Forecast not found" );
          }},
      })
        .done(function() {
           document.getElementById('weatherDescription').innerHTML = 'forecast';
      });
    } 
   
var geoError = function(error) {
         alert('Your position is not defined');
   };
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
 



//Reguesting the today weather from Darksky.net:

//Rendering requested data:

//Reguesting the yesterday weather from Darksky.net:

//Rendering requested data:

//Reguesting the tomorrow weather from Darksky.net:

//Rendering requested data:

//window.onload(getForecast());
// var getForecast = function (url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.withCredentials = true;

//     xhr.onreadystatechange = function () {
//         console.log(xhr)
//         if (xhr.readyState != xhr.DONE) return;

//         var status = xhr.status;
//         var headers = xhr.getAllResponseHeaders();
//         var text = xhr.responseText;

//     xhr.send();
//     }

 //document.getElementById('location').innerHTML = getForecast();

// document.getElementById('past').onclick(getForecast());

//document.getElementById('future').onclick(getForecast())
  
