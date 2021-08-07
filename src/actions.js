function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "4d356f6ca394b39fea0444ff6b8dc572";
let apiURL = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apikey}&units=metric`;

console.log(apiURL);
axios.get(apiURL).then(displayTemperature);

let weather = {
  jakarta: {
    temp: 19.7,
    humidity: 80,
  },
  singapore: {
    temp: 17.3,
    humidity: 50,
  },
  cambridge: {
    temp: 30.2,
    humidity: 20,
  },
  bandung: {
    temp: 20.9,
    humidity: 100,
  },
  london: {
    temp: -5,
    humidity: 20,
  },
};

let now = new Date();
console.log(now.getDate());

let h4 = document.querySelector("h4");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

h4.innerHTML = `${day}, ${date} | ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h2 = document.querySelector("h2");
  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}`;
  } else {
    h2.innerHTML = null;
    alert("please type a city");
  }
}
let form = document.querySelector("#search-form");

form.addEventListener("submit", search);
