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

var getweather = function (coords) {
  var  callback = function (response) {
      var weather = {
          temp: response.main.temp,
          windDeg: response.wind.deg,
          windSpeed: response.wind.speed,
          weatherMain: response.weather[0].main,
          weatherDesc: response.weather[0].description,
          weatherIcon: response.weather[0].icon
      };

    $(".degree h2").html(weather.temp + " &#8451");
    $(".weather-desc h5").text(weather.weatherMain);
    $(".weather-desc h6").text("(" + weather.weatherDesc + ")");
    $(".weather-image img").attr("src",weather.weatherIcon);
    $(".wind>span").eq(1).text(weather.windSpeed);
    $(".wind>span").eq(3).text(weather.windDeg);
  };
  weatherService(coords,callback)
};