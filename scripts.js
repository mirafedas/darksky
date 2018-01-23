var darkskyKey = '841e534fb31d0704d2286fa1e12346cf',
latitude,
longitude;

var url = 'https://api.darksky.net/forecast/' + darkskyKey + '/' + latitude + ',' + longitude;

window.onload(getForecast());
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