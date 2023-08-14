const apiKey = '9ba6eda27c85d260927aed5e8e0a5ac8';
const apiUrl1 = 'http://api.openweathermap.org/geo/1.0/direct?q="';
const apiUrl2 = 'https://api.openweathermap.org/data/2.5/weather?'

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const coordinates = await fetch(apiUrl1 + city + `"&limit1=2&appid=${apiKey}`);
    var data1 = await coordinates.json();

    console.log(data1);

    var longi = (data1[0].lon).toFixed(5);
    var lati = (data1[0].lat).toFixed(5);

    const response2 = await fetch ( apiUrl2 + `lat=${lati}&lon=${longi}&appid=${apiKey}`)
    var data2 = await response2.json()

    console.log(data2);


    document.querySelector('.city').innerHTML = data2.name;
    document.querySelector('.temp').innerHTML = Math.round(data2.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data2.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data2.wind.speed + " km/h";

    if(data2.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    } else if(data2.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    } else if(data2.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    } else if(data2.weather[0].main == 'Snow'){
        weatherIcon.src = "images/snow.png";
    } else if(data2.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    } else if(data2.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png";
    }

}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();