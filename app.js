// Call the API
$("#weather-button").on("click", function (event) {
  event.preventDefault();

  let city = $("#weather-input").val();

  let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=def8b41b43fe3f2e5dff96db885a6932`;

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function (response) {
      // Print the object to the console to test the functionality of the API
      console.log(response);

      let weatherCity = $("<h1>").text(response.name);

      console.log(response.name);

      let m = moment();

      let forecastMoment1 = moment().add(1, "days");
      let forecastMoment2 = moment().add(2, "days");
      let forecastMoment3 = moment().add(3, "days");
      let forecastMoment4 = moment().add(4, "days");
      let forecastMoment5 = moment().add(5, "days");

      let weatherDate = $("<h1>").text(m.format("L"));

      console.log(m.format("L"));

      let weatherTemp = $("<h4>").text(
        "Temperature: " + response.main.temp + " Kelvin"
      );
      console.log(response.main.temp); // Convert to Farenheit

      let weatherHumidity = $("<h4>").text(
        `Humidity: ${response.main.humidity}%`
      );
      console.log(response.main.humidity + "%");

      let weatherWind = $("<h4>").text(
        `Wind Speed: ${response.wind.speed} MPH`
      );
      console.log(`${response.wind.speed} MPH`);

      let foreCast = $("<h2>").text("5-Day Forecast");

      let forecastDate1 = $("<h5>").text(forecastMoment1.format("L"));
      let forecastDate2 = $("<h5>").text(forecastMoment2.format("L"));
      let forecastDate3 = $("<h5>").text(forecastMoment3.format("L"));
      let forecastDate4 = $("<h5>").text(forecastMoment4.format("L"));
      let forecastDate5 = $("<h5>").text(forecastMoment5.format("L"));

      $("#city").append(weatherCity);
      $("#date").append(weatherDate);
      $("#temp").append(weatherTemp);
      $("#humid").append(weatherHumidity);
      $("#wind").append(weatherWind);
      $("#forecast").append(foreCast);
      $("#dayOneDate").append(forecastDate1);
      $("#dayTwoDate").append(forecastDate2);
      $("#dayThreeDate").append(forecastDate3);
      $("#dayFourDate").append(forecastDate4);
      $("#dayFiveDate").append(forecastDate5);
    })

    .catch(function (err) {
      console.log(err);
    });

  let queryURL2 =
    "https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=def8b41b43fe3f2e5dff96db885a6932";

  $.ajax({
    url: queryURL2,
    method: "GET",
  })
    .then(function (response) {
      console.log(response);
      // Day 1
      let forecastMaxTemp1 = $("<p>").text(
        "High: " + response.list[3].main.temp_max + "Kelvin"
      );
      console.log(response.list[3].main.temp_max);

      let forecastMinTemp1 = $("<p>").text(
        "Low: " + response.list[3].main.temp_min + "Kelvin"
      );
      console.log(response.list[3].main.temp_min);

      let forecastHumidity1 = $("<p>").text(
        "Humidity: " + response.list[3].main.humidity + "%"
      );
      console.log(response.list[3].main.humidity);

      let forecastWind1 = $("<p>").text(
        "Wind Speed: " + response.list[3].wind.speed + "MPH"
      );
      console.log(response.list[3].wind.speed);

      let forecastWeather1 = $("<p>").text(response.list[3].weather[0].main);
      console.log(response.list[3].weather[0].main);

      // Day 2
      let forecastMaxTemp2 = $("<p>").text(
        "High: " + response.list[11].main.temp_max + "Kelvin"
      );
      console.log(response.list[11].main.temp_max);

      let forecastMinTemp2 = $("<p>").text(
        "Low: " + response.list[11].main.temp_min + "Kelvin"
      );
      console.log(response.list[11].main.temp_min);

      let forecastHumidity2 = $("<p>").text(
        "Humidity: " + response.list[11].main.humidity + "%"
      );
      console.log(response.list[11].main.humidity);

      let forecastWind2 = $("<p>").text(
        "Wind Speed: " + response.list[11].wind.speed + "MPH"
      );
      console.log(response.list[11].wind.speed);

      let forecastWeather2 = $("<p>").text(response.list[11].weather[0].main);
      console.log(response.list[11].weather[0].main);

      // Day 3
      let forecastMaxTemp3 = $("<p>").text(
        "High: " + response.list[19].main.temp_max + "Kelvin"
      );
      console.log(response.list[19].main.temp_max);

      let forecastMinTemp3 = $("<p>").text(
        "Low: " + response.list[19].main.temp_min + "Kelvin"
      );
      console.log(response.list[19].main.temp_min);

      let forecastHumidity3 = $("<p>").text(
        "Humidity: " + response.list[19].main.humidity + "%"
      );
      console.log(response.list[19].main.humidity);

      let forecastWind3 = $("<p>").text(
        "Wind Speed: " + response.list[19].wind.speed + "MPH"
      );
      console.log(response.list[19].wind.speed);

      let forecastWeather3 = $("<p>").text(response.list[19].weather[0].main);
      console.log(response.list[19].weather[0].main);

      // Day 4
      let forecastMaxTemp4 = $("<p>").text(
        "High: " + response.list[27].main.temp_max + "Kelvin"
      );
      console.log(response.list[27].main.temp_max);

      let forecastMinTemp4 = $("<p>").text(
        "Low: " + response.list[27].main.temp_min + "Kelvin"
      );
      console.log(response.list[27].main.temp_min);

      let forecastHumidity4 = $("<p>").text(
        "Humidity: " + response.list[27].main.humidity + "%"
      );
      console.log(response.list[27].main.humidity);

      let forecastWind4 = $("<p>").text(
        "Wind Speed: " + response.list[27].wind.speed + "MPH"
      );
      console.log(response.list[27].wind.speed);

      let forecastWeather4 = $("<p>").text(response.list[27].weather[0].main);
      console.log(response.list[27].weather[0].main);

      // Day 5
      let forecastMaxTemp5 = $("<p>").text(
        "High: " + response.list[35].main.temp_max + "Kelvin"
      );
      console.log(response.list[35].main.temp_max);

      let forecastMinTemp5 = $("<p>").text(
        "Low: " + response.list[35].main.temp_min + "Kelvin"
      );
      console.log(response.list[35].main.temp_min);

      let forecastHumidity5 = $("<p>").text(
        "Humidity: " + response.list[35].main.humidity + "%"
      );
      console.log(response.list[35].main.humidity);

      let forecastWind5 = $("<p>").text(
        "Wind Speed: " + response.list[35].wind.speed + "MPH"
      );
      console.log(response.list[35].wind.speed);

      let forecastWeather5 = $("<p>").text(response.list[35].weather[0].main);
      console.log(response.list[35].weather[0].main);

      // Day 1
      $("#dayOneMax").append(forecastMaxTemp1);
      $("#dayOneMin").append(forecastMinTemp1);
      $("#dayOneHumidity").append(forecastHumidity1);
      $("#dayOneWind").append(forecastWind1);
      $("#dayOneWeather").append(forecastWeather1);

      // Day 2
      $("#dayTwoMax").append(forecastMaxTemp2);
      $("#dayTwoMin").append(forecastMinTemp2);
      $("#dayTwoHumidity").append(forecastHumidity2);
      $("#dayTwoWind").append(forecastWind2);
      $("#dayTwoWeather").append(forecastWeather2);

      // Day 3
      $("#dayThreeMax").append(forecastMaxTemp3);
      $("#dayThreeMin").append(forecastMinTemp3);
      $("#dayThreeHumidity").append(forecastHumidity3);
      $("#dayThreeWind").append(forecastWind3);
      $("#dayThreeWeather").append(forecastWeather3);

      // Day 4
      $("#dayFourMax").append(forecastMaxTemp4);
      $("#dayFourMin").append(forecastMinTemp4);
      $("#dayFourHumidity").append(forecastHumidity4);
      $("#dayFourWind").append(forecastWind4);
      $("#dayFourWeather").append(forecastWeather4);

      // Day 5
      $("#dayFiveMax").append(forecastMaxTemp5);
      $("#dayFiveMin").append(forecastMinTemp5);
      $("#dayFiveHumidity").append(forecastHumidity5);
      $("#dayFiveWind").append(forecastWind5);
      $("#dayFiveWeather").append(forecastWeather5);
    })

    .catch(function (err) {
      console.log(err);
    });
});
