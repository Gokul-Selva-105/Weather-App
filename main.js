function getWeather() {
  const cityInput = document.getElementById("cityInput").value;
  if (!cityInput) {
    alert("Please enter a city.");
    return;
  }
  const apiKey = "e39e85f7be2467078df7120afb962e93";
  const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityInput}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    });
}
function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  if (data.error) {
    weatherInfo.innerText = `Error: ${data.error.info}`;
  } else {
    const city = data.location.name;
    const temperature = data.current.temperature;
    const description = data.current.weather_descriptions[0];
    weatherInfo.innerText = `Weather in ${city}: ${temperature}°C, ${description}.`;
  }
}
