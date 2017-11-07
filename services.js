var getLocationService = function (googleService, setLocation) {
    var key = "AIzaSyBRLZtMjEBhcpe5X-wcldEXK4K6j3K2Yv4";
    var callback = function(location) {
        var data = {
            lat:location.coords.latitude,
            long:location.coords.longitude
        };
        googleService(data,key,setLocation)
    };

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(callback);
    }else {
        alert("Geolocation is not supported");
    }
};

var googleService = function (data,key,setLocation) {
    var lat = data.lat;
    var long = data.long;
    var service = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat +"," + long +" &key=" + key;
    return $.ajax({
        method:"GET",
        url:service,
        success:function (response) {
            var location = response["results"][0]["address_components"][4]["long_name"];
            setLocation(location);
        },
        error: function () {
            console.log("Error");
        }
    });
};
