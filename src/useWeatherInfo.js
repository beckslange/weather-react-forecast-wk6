import { useState } from "react";
import axios from "axios";

export default function useWeatherInfo(defaultCity) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(defaultCity);

  function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day} ${hours}:${minutes} ${ampm}`;
  }

  function refreshWeather(response) {
    setWeatherData({
      city: response.data.city,
      time: formatDate(response.data.time),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      temperature: Math.round(response.data.temperature.current),
      iconURL: response.data.condition.icon_url,
    });
  }

  function searchCity(cityName) {
    let apiKey = "tfo33b89af42954f2d60430a801e1b3c";

    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=imperial`;

    axios.get(apiURL).then(refreshWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return {
    weatherData,
    city,
    searchCity,
    updateCity,
  };
}
