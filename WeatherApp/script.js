const apiKey = '9ba6eda27c85d260927aed5e8e0a5ac8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

var lat = '40.7128';
var lon = '-73.9352';

var lon, lat;

async function checkWeather(){
    const response = await fetch(apiUrl + `&lat=${lat}&lon=${lon}&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "images/snow.png";
    } else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png";
    }

}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();