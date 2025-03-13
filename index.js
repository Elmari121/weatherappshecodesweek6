let apiKey = "30927dtfa44b4770359oe8258a9c5b2c";

let getWeatherButton = document.getElementById("getWeather");
let cityInput = document.getElementById("city");
let weatherInfo = document.getElementById("weather-info");

getWeatherButton.addEventListener("click", getWeather);

async function getWeather() {
  let city = cityInput.value.trim();

  if (city) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    try {
      let response = await fetch(apiUrl);
      let data = await response.json();

      if (data && data.data) {
        displayWeather(data.data);
      } else {
        weatherInfo.innerHTML = `<p>City not found! Please try again.</p>`;
      }
    } catch (error) {
      weatherInfo.innerHTML = `<p>Failed to retrieve data. Please try again later.</p>`;
    }
  } else {
    weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
  }
}

function displayWeather(data) {
  let { city, temperature, weather, wind, humidity } = data;
  let description = weather[0].description;
  let windSpeed = wind.speed;

  weatherInfo.innerHTML = `
    <p>City: ${city}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
  `;
}
function displayWeather(data) {
  let { city, temperature, weather, wind, humidity } = data;
  let description = weather[0].description;
  let windSpeed = wind.speed;
  let icon = weather[0].icon;

  let iconUrl = `https://shecodes-assets.s3.amazonaws.com/weather-icons/${icon}.png`;

  weatherInfo.innerHTML = `
    <p>City: ${city}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
    <img src="${iconUrl}" alt="weather icon" />
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
  `;
}
