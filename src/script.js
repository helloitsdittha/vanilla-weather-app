let apiKey = "4d356f6ca394b39fea0444ff6b8dc572";
let city = "London";
let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric";

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");

  temperatureElement.innerHTML = `${temperature}°C`;
}

let h2 = document.querySelector("#city");
h2.innerHTML = city;

axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature);
