$(document).ready(function () {
    checkbox();
    tooltip();

    var setLocation = function (location) {
        $(".location h3").text(location);
    };

    getLocationService(googleService,setLocation);
});