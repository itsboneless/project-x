const apiKey = import.meta.env.VITE_API_KEY;

let weather = {
  fetchWeather: function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) throw new Error("No weather found.");
        return response.json();
      })
      .then((data) => this.displayWeather(data))
      .catch((err) => console.error(err));
  },
  displayWeather: function (data) {
    const country = data.sys.country;
    const icon = data.weather[0].icon;
    const temp = Math.round(data.main.temp - 273);

    const countryEl = document.querySelector(".country");
    const iconEl = document.querySelector(".icon");
    const tempEl = document.querySelector(".temp");

    if (countryEl && iconEl && tempEl) {
      countryEl.innerText = country;
      iconEl.src = `https://openweathermap.org/img/wn/${icon}.png`;
      tempEl.innerText = `${temp}°C`;
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  weather.fetchWeather("Eindhoven");
});
