var checkbox = function () {
    $("#degreeToggle").bootstrapToggle({
        on:"&#8457;",
        off:"&#8451",
        onstyle: "warning",
        offstyle: "info",
        size:"small"
    });
};

var tooltip = function () {
  $("[data-toggle = 'degree-tooltip']").tooltip({
      title:"Toggle to change temprature unit",
      placement:"right"
  });
};

var setLocation = function (coords) {
    var key = "AIzaSyBRLZtMjEBhcpe5X-wcldEXK4K6j3K2Yv4";
    var callback = function (response) {
        var location = response["results"][0]["address_components"][4]["long_name"];
        $(".location h3").text(location);
    }
    googleService(coords,key,callback);
};

var getWheather = function () {

}