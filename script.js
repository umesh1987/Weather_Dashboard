//start from-- -- -- -- -- -- -- -- -
$(document).ready(function() {

    // time format
    var dateTime = moment().format('MMMM DD YYYY, h:mm:ss a');
    var day = moment().format('dddd');
    $("#timeDisplay").text(day + ", " + dateTime)
});


// pick up class name from index.html

var inputValue = document.querySelector(".inputValue");
var button = document.querySelector(".btn");
var cityName = document.querySelector(".cityName");
var temperature = document.querySelector(".mainTemperature");
var humidity = document.querySelector(".mainHumidity");
var windSpeed = document.querySelector(".mainWindSpeed");
var UVIndex = document.querySelector(".mainUVIndex");



button.addEventListener("click", function() {

    //search your city by name and diaplay current day's weather

    var weatherUrl = ("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=052706549ff88ccb14671af33d19a926")
    $.ajax({ url: weatherUrl, method: "GET" }).then(function(response) {
        console.log(response)

        //append to index.html

        $(".cityName").html(response.name);
        $(".mainTemperature").html("Temperature: " + response.main.temp);
        $(".mainHumidity").html("Humidity: " + response.main.humidity);
        $(".mainWindSpeed").text("Wind Speed: " + response.wind.speed);


        //Converts the temp to Kelvin with the below formula
        var mainTemperatureA = (response.main.temp - 273.15) * 1.80 + 32;
        $(".mainTemperatureA").text("Temperature (Kelvin) " + mainTemperatureA);

        $(".cityName1").html(response.name);
    })
})

// my uv index not work
button.addEventListener("click", function() {
    var uvUrl = ("https://api.openweathermap.org/data/2.5/uvi?=" + inputValue.value + "&appid=052706549ff88ccb14671af33d19a926")
    $.ajax({ url: uvUrl, method: "GET" }).then(function(response) {
        console.log(response)
    })
})

//search 4 day's future weather forecast
button.addEventListener("click", function() {
    var forecastUrl = ("https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=052706549ff88ccb14671af33d19a926")
    $.ajax({ url: forecastUrl, method: "GET" }).then(function(response) {
        console.log(response)

        $(".card11Date").html("Date: " + response.list[3].dt_txt);
        $(".card11Temp").html("Temperature: " + response.list[3].main.temp);
        $(".card11Humi").html("Humidity: " + response.list[3].main.humidity);

        $(".card12Date").html("Date: " + response.list[11].dt_txt);
        $(".card12Temp").html("Temperature: " + response.list[11].main.temp);
        $(".card12Humi").html("Humidity: " + response.list[11].main.humidity);

        $(".card13Date").html("Date: " + response.list[19].dt_txt);
        $(".card13Temp").html("Temperature: " + response.list[19].main.temp);
        $(".card13Humi").html("Humidity: " + response.list[19].main.humidity);

        $(".card14Date").html("Date: " + response.list[27].dt_txt);
        $(".card14Temp").html("Temperature: " + response.list[27].main.temp);
        $(".card14Humi").html("Humidity: " + response.list[27].main.humidity);

    })
})