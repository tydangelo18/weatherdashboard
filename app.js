// Call the API
function searchCity() {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=def8b41b43fe3f2e5dff96db885a6932";

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function (response) {
      // Print the object to the console to test the functionality of the API
      console.log(response);

      let weatherCity = $("<h1>").text(response.name);

      console.log(response.name);

      const m = moment();

      let weatherDate = $("<h1>").text(m.format("MMMM Do, YYYY"));

      console.log(m.format("MMMM Do, YYYY"));

      let weatherTemp = $("<h4>").text(
        "Temperature: " + response.main.temp + " Kelvin"
      );
      console.log(response.main.temp); // Convert to Farenheit

      let weatherHumidity = $("<h4>").text(
        "Humidity: " + response.main.humidity + "%"
      );
      console.log(response.main.humidity + "%");

      let weatherWind = $("<h4>").text(
        `Wind Speed: ${response.wind.speed} MPH`
      );
      console.log(`${response.wind.speed} MPH`);

      let foreCast = $("<h2>").text("5-Day Forecast");

      $("#city").append(weatherCity);
      $("#date").append(weatherDate);
      $("#temp").append(weatherTemp);
      $("#humid").append(weatherHumidity);
      $("#wind").append(weatherWind);
      $("#forecast").append(foreCast);
    })

    .catch(function (err) {
      console.log(err);
    });
}

$("#weather-button").on("click", function (event) {
  event.preventDefault();
  let inputCity = $("#weather-input").val().trim();

  searchCity(inputCity);
});
