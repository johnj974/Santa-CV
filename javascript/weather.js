import { WEATHER_KEY } from "./key.js";

$(document).ready(function () {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
    } else {
      alert("Geolocation Not Active");
    }
  }

  function getWeather(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const API_KEY = WEATHER_KEY;
    let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

    $.get(baseURL, function (res) {
      let data = res.current;
      let temp = Math.floor(data.temp - 273);
      let condition = data.weather[0].description;
      $("#temp-main").html(`${temp}°`);
      $("#condition").html(condition);
    });

    let northLat = 90.0;
    let northLong = 135.0;
    let northURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${northLat}&lon=${northLong}&appid=${API_KEY}`;

    $.get(northURL, function (res) {
      let northData = res.current;
      let northTemp = Math.floor(northData.temp - 273);
      let northCondition = northData.weather[0].description;
      $("#north-temp-main").html(`${northTemp}°`);
      $("#north-condition").html(northCondition);
    });
  }

  getLocation();
});
