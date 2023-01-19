function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = " aab327076aaf3ac1082bb1368b63d1da";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
