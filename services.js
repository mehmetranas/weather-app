var getLocationService = function (setLocation) {
    var callback = function(location) {
        var data = {
            lat:location.coords.latitude,
            long:location.coords.longitude
        };
        setLocation(data);
    };

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(callback);
    }else {
        alert("Geolocation is not supported");
    }
};

var googleService = function (coords,key,callback) {
    var lat = coords.lat;
    var long = coords.long;
    var service = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat +"," + long +" &key=" + key;
    return $.ajax({
        method:"GET",
        url:service,
        success:function (response) {
            callback(response);
        },
        error: function () {
            console.log("Error");
        }
    });
};
var wheatherService = function () {

    var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long;
    $.get(url).done(function (data) {
        console.log(data)
    });
}