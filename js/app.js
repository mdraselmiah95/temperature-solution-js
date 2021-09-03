const api_key = `00648c3df9cb0d2748fb5dbdaa57cfae`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data.main));
};

const displayTemperature = (temperature) => {
  console.log(temperature.temp);
};
