const API_KEY = "7f15b50d196347779a6171325251611";
let isCelsius = true;

const searchBtn = document.getElementById("searchBtn");
const locBtn = document.getElementById("locBtn");
const toggleBtn = document.getElementById("toggleBtn");

searchBtn.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) fetchWeather(city);
});

locBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        fetchWeather(null, lat, lon);
    });
});

toggleBtn.addEventListener("click", toggleTemp);

// Fetch Weather
async function fetchWeather(city, lat = null, lon = null) {
    showLoader(true);

    let url = "";

    if (city) {
        url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    } else {
        url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert("City not found!");
            showLoader(false);
            return;
        }

        displayWeather(data);
    } catch (err) {
        alert("Error fetching data");
    }

    showLoader(false);
}


// Display Weather Data
function displayWeather(data) {
    document.getElementById("weatherBox").classList.remove("hidden");

    document.getElementById("cityName").innerHTML =
        `${data.location.name}, ${data.location.country}`;

    document.getElementById("weatherIcon").src = data.current.condition.icon;

    document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
    document.getElementById("description").innerHTML = data.current.condition.text;

    document.getElementById("feels").innerHTML = `${data.current.feelslike_c}°C`;
    document.getElementById("humidity").innerHTML = `${data.current.humidity}%`;
    document.getElementById("pressure").innerHTML = `${data.current.pressure_mb} hPa`;
    document.getElementById("wind").innerHTML = `${data.current.wind_kph} kph`;
}


// Celsius <-> Fahrenheit
function toggleTemp() {
    let tempText = document.getElementById("temp").innerHTML;
    let feelsText = document.getElementById("feels").innerHTML;

    let tempVal = parseFloat(tempText);
    let feelsVal = parseFloat(feelsText);

    if (isCelsius) {
        document.getElementById("temp").innerHTML = `${(tempVal * 9/5 + 32).toFixed(1)}°F`;
        document.getElementById("feels").innerHTML = `${(feelsVal * 9/5 + 32).toFixed(1)}°F`;
        toggleBtn.innerHTML = "Switch to °C";
    } else {
        document.getElementById("temp").innerHTML = `${((tempVal - 32) * 5/9).toFixed(1)}°C`;
        document.getElementById("feels").innerHTML = `${((feelsVal - 32) * 5/9).toFixed(1)}°C`;
        toggleBtn.innerHTML = "Switch to °F";
    }

    isCelsius = !isCelsius;
}

// Loader Handler
function showLoader(value) {
    const loader = document.getElementById("loader");
    if (value) loader.classList.remove("hidden");
    else loader.classList.add("hidden");
}
