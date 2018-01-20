var url = 'https://api.darksky.net/forecast/841e534fb31d0704d2286fa1e12346cf/49.813385,24.016904';

var getForecast = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
        console.log(xhr)
        if (xhr.readyState != xhr.DONE) return;

        var status = xhr.status;
        var headers = xhr.getAllResponseHeaders();
        var text = xhr.responseText;

    xhr.send();
    };

 document.getElementById('location').innerHTML = getForecast();

// document.getElementById('past').onclick(){

//};

//document.getElementById('future').onclick(){
    
//} 