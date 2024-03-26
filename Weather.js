const apiKey = "5d184c1bfb79c45bb631d1cece068ea3";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchbox = document.querySelector(".search-box input");
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);
// const weataherIcon = document.querySelector(".weather-icon");

function setQuery(evt) {
  if (evt.keyCode == 13) {
    checkWeather(searchbox.value);
  }
}
// const searchbtn = document.querySelector(".search-box ");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.name.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  // if(data.weather[0].main == "Clouds"){
  //     weathericon.src = "images/clouds.png";
  // }
  // else if(data.weather[0].main == "Clear"){
  //     weathericon.src = "images/clouds.png";
  // }
  // else if(data.weather[0].main == "Drizzle"){
  //     weathericon.src = "images/clouds.png";
  // }
  // else if(data.weather[0].main == "rain"){
  //     weathericon.src = "images/clouds.png";
  // }
  // else if(data.weather[0].main == "mist"){
  //     weathericon.src = "images/clouds.png";
  // }
}
