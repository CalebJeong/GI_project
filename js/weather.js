const API_KEY = "7251ff9ba9f08b15f2c64b3f71acf471";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.58&lon=127.0&appid=${API_KEY}&units=metric`;

const cureentWeatherText = document.querySelector(".weather__first__number");

fetch(url).then(response => response.json()).then(data=>{
    const currentWeather = data.weather[0].main;
    const currentTemp = Math.floor(data.main.temp);

    changeTemp(`${currentTemp}℃`);
    
})

function changeTemp(weather) {
    cureentWeatherText.innerText = weather;
}