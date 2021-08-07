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

let city = prompt("enter your city");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let celciustemperature = Math.round(temperature);
  let farenheittemperature = Math.round((temperature * 9) / 5 + 32);
  let hum = weather[city].humidity;
  alert(
    `It is currently ${celciustemperature} °C ( ${farenheittemperature} °F) in ${city} with a humidity of ${hum} %.`
  );
} else {
  alert(`Sorry, we do not know the weather for this city, try googling`);
}

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
