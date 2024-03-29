const getWeather = async (location) => {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        `${location}` +
        '&APPID=ae1abda2439bece21312504ac8a5fba7'
    );
    const data = await response.json();

    const wrapper = document.querySelector('#wrapper');
    wrapper.style.animation = 'fadein 2s';

    const weather = document.querySelector('.weather');
    const name = document.querySelector('.location');
    const date = document.querySelector('.date');
    const temp = document.querySelector('.temp');
    const weatherImg = document.querySelector('#weather-img');
    const feelsTemp = document.querySelector('#feels-temp');
    const humidity = document.querySelector('#humidity');
    const windSpeed = document.querySelector('#wind-speed');
    const error = document.querySelector('.container-error');
    error.textContent = '';

    const forecast = {
      temp: Math.floor(data.main.temp - 273.15),
      humidity: data.main.humidity,
      feels_like: Math.floor(data.main.feels_like - 273.15),
      weather: data.weather[0].description,
      name: data.name,
      wind_speed: data.wind.speed,
      img: data.weather[0].icon,
    };

    const weatherDescription = capitalizeFirstLetter(forecast.weather);

    weather.textContent = weatherDescription;
    name.textContent = forecast.name;
    date.textContent = new Date().toISOString().slice(0, 10);
    temp.textContent = `${forecast.temp}°C`;
    feelsTemp.textContent = `${forecast.feels_like}°C`;
    humidity.textContent = `${forecast.humidity}%`;
    windSpeed.textContent = `${forecast.wind_speed}m/s`;
    weatherImg.src =
      'http://openweathermap.org/img/wn/' + `${forecast.img}` + '@2x.png';
      
  } catch (err) {
    const wrapper = document.querySelector('#wrapper');
    wrapper.style.animation = '';

    const error = document.querySelector('.container-error');
    error.textContent = 'Location not found.';
  }
};

const submitLocation = () => {
  const input = document.querySelector('#location');
  const submit = document.querySelector('#submit');
  const wrapper = document.querySelector('#wrapper');

  submit.addEventListener('click', () => {
    wrapper.style.animation = '';
    getWeather(input.value);
  });
};

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

getWeather('Moldova');

submitLocation();
