// api key
import apiKey from "./config.js";
let inputEl = document.getElementById("city");

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

    if (weather.list.length === 0) {
      throw new Error("No weather data found for the provided city.");
    }

    let temp = weather.list[0].main.temp;
    TempatureList(weather.city.name, temp);
    createPrevWeatherSearchList(weather.city.name);
    cityListSaved.push(weather.city.name);
    localStorage.setItem("lastweather", cityListSaved);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}

function createPrevWeatherSearchList(name) {
  const cityName = name.split(",").join("\n");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let renderSearchEl = document.getElementById("renderSearch");
  li.innerText = cityName;
  renderSearchEl.appendChild(ul);
  ul.appendChild(li);
}

function TempatureList(name, temp) {
  let weatherDataEl = document.getElementById("weather-data");
  let pEl = document.createElement("p");
  pEl.innerText = `${name} tempature today ${temp}`;
  weatherDataEl.appendChild(pEl);
}

function getCities() {
  let cities = localStorage.getItem("lastweather");
  if (cities) {
    createPrevWeatherSearchList(cities);
  }
  return;
}
getCities();
