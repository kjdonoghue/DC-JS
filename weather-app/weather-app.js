let locationTextBox = document.getElementById("locationTextBox")
let submitButton = document.getElementById("submitButton")
let displayWeatherDiv = document.getElementById("displayWeatherDiv")
let displayImageDiv = document.getElementById("displayImageDiv")
let apiKey = "953e697597be03d96e946ec52d9cc505"

//onclick function to find location when manually submit city name
function getCityLocation(){
    let city = locationTextBox.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    displayWeather(url)
}

//onclick function to find location using Geolocation
function getGeoLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`
        displayWeather(url)
    })  
}

//display weather based on location
async function displayWeather(location) {
    let response = await fetch(location)
    let results = await response.json()

    weatherInformation = `<div class="detailsDiv">
        <h2>${results.name}:</h2>
        <div class="icon"><img src='http://openweathermap.org/img/wn/${results.weather[0].icon}@4x.png'></div>
        <div class="results"><p>Current Weather: ${results.weather[0].description}</p>
        <p> Expected High: ${results.main.temp_max} &#x2109;</p>
        <p> Expected Low: ${results.main.temp_min} &#x2109;</p>
        <p> Pressure: ${results.main.pressure}</p>
        <p> Pressure: ${results.main.humidity}</p></div>
    </div>`

    displayWeatherDiv.innerHTML = weatherInformation
   
}