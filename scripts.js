//vars
var darkskyKey = '841e534fb31d0704d2286fa1e12346cf';

//Getting users position:
window.onload = function findLocation() {
    var geoSuccess = function() {
      document.getElementById('startLat').innerHTML = startPos.coords.latitude.toFixed(4);
      document.getElementById('startLon').innerHTML = startPos.coords.longitude.toFixed(4);
    };
    var geoError = function(error) {
        alert('Your position is not defined');
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  };

//Preparing data to make a request to Darksky.net:

//var url = 'https://api.darksky.net/forecast/' + darkskyKey + '/' + latitude + ',' + longitude;

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
