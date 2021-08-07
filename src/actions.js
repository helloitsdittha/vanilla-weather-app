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
