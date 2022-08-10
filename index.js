function newChangesGeo(response) {
  let digit = document.querySelector("#temperature-digit");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");
  let liveCelciusTemp = Math.round(response.data.main.temp);
  let liveHumidity = response.data.main.humidity;
  let liveWindSpeed = Math.round(response.data.wind.speed);
  let h1 = document.querySelector("h1");

  h1.innerHTML = response.data.name;
  digit.innerHTML = liveCelciusTemp;
  wind.innerHTML = liveWindSpeed;
  humidity.innerHTML = liveHumidity;
}

function apiGeoLocator(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = "cecdfb5a304ab89ee10094e43ed6429d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(newChangesGeo);
}

function trigger() {
  navigator.geolocation.getCurrentPosition(apiGeoLocator);
}

function newChanges(response) {
  let digit = document.querySelector("#temperature-digit");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");
  let liveCelciusTemp = Math.round(response.data.main.temp);
  let liveHumidity = response.data.main.humidity;
  let liveWindSpeed = Math.round(response.data.wind.speed);
  let h1 = document.querySelector("h1");

  h1.innerHTML = response.data.name;
  digit.innerHTML = liveCelciusTemp;
  wind.innerHTML = liveWindSpeed;
  humidity.innerHTML = liveHumidity;
}

function api(value) {
  let city = value;
  let unit = "metric";
  let apiKey = "cecdfb5a304ab89ee10094e43ed6429d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(newChanges);
}

function changeCity(event) {
  event.preventDefault();
  let searchEngineInput = document.querySelector("#searchEngineInput");

  if (searchEngineInput.value.length < 1) {
    alert("Please input a valid city");
  }
  api(searchEngineInput.value);
}

let now = new Date();

let DaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = DaysOfWeek[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${now.getHours()}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${now.getMinutes()}`;
}
let date = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

let displayDate = document.querySelector("#display-date");
displayDate.innerHTML = `${day}, ${hour}:${minute} <br /> ${date}/${month}/${year}`;

let form = document.querySelector("#weather-search-engine");
form.addEventListener("submit", changeCity);

let button = document.querySelector("button");
button.addEventListener("click", trigger);

api("Imo");
