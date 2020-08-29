function clear(ids) {
  for (const id of ids) {
    $("#" + id).empty();
  }
}

function writeHTML(obj, method) {
  for (const id in obj) {
    $("#" + id)[method](obj[id]);
  }
}



// Call the API
$("#weather-button").on("click", function (event) {
  event.preventDefault();
   // $("#city").animate({
   //   opacity: 0.4,
   //   
   // }, 1500);

  // Declare a variable for any city inserted into the search bar
      let city = $("#weather-input").val();
    
    // Local Storage
      // Save recent searches to local storage
      //  localStorage.setItem("savedCity", JSON.stringify(city));
      //
       // Grab city from local storage
      //  let recentCity = $("<p>").text(JSON.parse(localStorage.getItem("savedCity")));
      //
      //  Append the most recent searched city into Recent Container in HTML
      //  $("#cityOne").append(recentCity);

  // OpenWeather API URL & API Key
  let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=def8b41b43fe3f2e5dff96db885a6932`;
  // Weather Icon Call
  let iconURL = `http://openweathermap.org/img/wn/`

  
  // Vanilla JS API Call
  // async function ajaxCall(){
  //   try{
  //     const response = await $.ajax({
  //       url: queryURL,
  //       method: "GET",
  //     })
  //     console.log(`--->RESPONSE<---`, response)
  //   }catch(error){
  //     console.log(error)
  //   }


$.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function (response) {
      let weatherCity = $("<h1>").text(response.name);
      let weatherIcon = $("<img>").attr('src',`${iconURL}${response.weather[0].icon}@2x.png`);

      // Moment.js
      let m = moment();

      let forecastMoment1 = moment().add(1, "days");
      let forecastMoment2 = moment().add(2, "days");
      let forecastMoment3 = moment().add(3, "days");
      let forecastMoment4 = moment().add(4, "days");
      let forecastMoment5 = moment().add(5, "days");

      let weatherDate = $("<h2>").text(m.format("LT"));

      let weatherTemp = $("<h4>").text(
        Math.round(((response.main.temp - 273.15) * 9) / 5 + 32) +
          " °F"
      );

      let weatherHumidity = $("<h4>").text(
        `Humidity: ${response.main.humidity}%`
      );

      let weatherWind = $("<h4>").text(
        `Wind Speed: ${response.wind.speed} MPH`
      );

      // Moment.js
      let foreCast = $("<h2>");

      let forecastDate1 = $("<h5>").text(forecastMoment1.format("ddd"));
      let forecastDate2 = $("<h5>").text(forecastMoment2.format("ddd"));
      let forecastDate3 = $("<h5>").text(forecastMoment3.format("ddd"));
      let forecastDate4 = $("<h5>").text(forecastMoment4.format("ddd"));
      let forecastDate5 = $("<h5>").text(forecastMoment5.format("ddd"));

      // Append Each API object into HTML
      const callObj = {
        city: weatherCity,
        icon: weatherIcon,
        currentTime: weatherDate,
        temp: weatherTemp,
        humid: weatherHumidity,
        wind: weatherWind,
        forecast: foreCast,
        dayOneDate: forecastDate1,
        dayTwoDate: forecastDate2,
        dayThreeDate: forecastDate3,
        dayFourDate: forecastDate4,
        dayFiveDate: forecastDate5,
      };

      clear(Object.keys(callObj));
      writeHTML(callObj, "append");
    })

    // Catch Errors if API doesn't run
    .catch(function (err) {
      console.log(err);
    });

  // OpenWeather 5-Day Forecast API URL & API Key
  let queryURL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=def8b41b43fe3f2e5dff96db885a6932`;
  // Weather Icon Call
  let iconURL2 = `http://openweathermap.org/img/wn/`

  // AJAX call for the API
  $.ajax({
    url: queryURL2,
    method: "GET",
  })
    .then(function (response) {
      console.log(response.list[3].weather[0].icon);
      // Day 1
      let forecastMaxTemp1 = $("<p>").text(
        Math.round(((response.list[3].main.temp_max - 273.15) * 9) / 5 + 32) +
          " °F"
      );

      let weatherIconDayOne = $("<img>").attr('src',`${iconURL2}${response.list[3].weather[0].icon}@2x.png`);

      // Day 2
      let forecastMaxTemp2 = $("<p>").text(
        Math.round(
            ((response.list[11].main.temp_max - 273.15) * 9) / 5 + 32
          ) +
          " °F"
      );

      let weatherIconDayTwo = $("<img>").attr('src',`${iconURL2}${response.list[11].weather[0].icon}@2x.png`);

      // Day 3
      let forecastMaxTemp3 = $("<p>").text(
        Math.round(
            ((response.list[19].main.temp_max - 273.15) * 9) / 5 + 32
          ) +
          " °F"
      );

      let weatherIconDayThree = $("<img>").attr('src',`${iconURL2}${response.list[19].weather[0].icon}@2x.png`);

      // Day 4
      let forecastMaxTemp4 = $("<p>").text(
        Math.round(
            ((response.list[27].main.temp_max - 273.15) * 9) / 5 + 32
          ) +
          " °F"
      );

      let weatherIconDayFour = $("<img>").attr('src',`${iconURL2}${response.list[27].weather[0].icon}@2x.png`);

      // Day 5
      let forecastMaxTemp5 = $("<p>").text(
        Math.round(
            ((response.list[35].main.temp_max - 273.15) * 9) / 5 + 32
          ) +
          " °F"
      );

      let weatherIconDayFive = $("<img>").attr('src',`${iconURL2}${response.list[35].weather[0].icon}@2x.png`);

      const forecastObj = {
        dayOneMax: forecastMaxTemp1,
        dayTwoMax: forecastMaxTemp2,
        dayThreeMax: forecastMaxTemp3,
        dayFourMax: forecastMaxTemp4,
        dayFiveMax: forecastMaxTemp5,
        dayOneIcon: weatherIconDayOne,
        dayTwoIcon: weatherIconDayTwo,
        dayThreeIcon: weatherIconDayThree,
        dayFourIcon: weatherIconDayFour,
        dayFiveIcon: weatherIconDayFive,
      };

      clear(Object.keys(forecastObj));
      writeHTML(forecastObj, "append");
    })

    .catch(function (err) {
      console.log(err);
    });
});


