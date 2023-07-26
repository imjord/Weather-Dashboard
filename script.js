// api key
// import apiKey from "./config.js";
let inputEl = document.getElementById("city");
let apiKey = "5eb7d8eaa2f23d433771db6d9ffdd905";
let cityListSaved = [];
const lastSessionCities = localStorage.getItem("lastweather");
if (lastSessionCities) {
  cityListSaved.push(lastSessionCities);
}

async function getWeather(e) {
  e.preventDefault();
  let myApiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${inputEl.value}&appid=${apiKey}&units=imperial`;
  try {
    let response = await fetch(myApiCall);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    let weather = await response.json();
    console.log(weather);
    if (weather.list.length === 0) {
      throw new Error("No weather data found for the provided city.");
    }

    let temp = weather.list[0].main.temp;
    listTempature(weather.city.name, temp);
    weatherList(weather.city.name);
    cityListSaved.push(weather.city.name);
    localStorage.setItem("lastweather", cityListSaved);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}

function weatherList(name) {
  let ul = document.createElement("ul");
  let renderSearchEl = document.getElementById("renderSearch");
  let li = document.createElement("li");
  li.classList.add("prev-list");
  li.innerText = name.trim();
  ul.appendChild(li);
  renderSearchEl.appendChild(ul);
}

function listTempature(name, temp) {
  let weatherDataEl = document.getElementById("weather-container");
  let pEl = document.createElement("p");
  pEl.classList.add("weather-p");
  pEl.innerText = `${name} tempature today ${temp}`;
  weatherDataEl.appendChild(pEl);
}

function getCities() {
  let cities = localStorage.getItem("lastweather");
  if (cities) {
    const cityList = cities.split(",");
    cityList.forEach((city) => weatherList(city));
  }
  return;
}
getCities();
