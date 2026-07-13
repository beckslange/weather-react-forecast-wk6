import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useWeatherInfo from "./useWeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const { weatherData, city, searchCity, updateCity } = useWeatherInfo(
    props.defaultCity
  );

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  if (weatherData === null) {
    searchCity(props.defaultCity);

    return <p>Loading...</p>;
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="form-control"
              autoFocus
              onChange={updateCity}
            />
          </div>

          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1 className="city-name">{weatherData.city}</h1>

      <ul className="list-unstyled">
        <li>{weatherData.time}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src={weatherData.iconURL}
              alt={weatherData.description}
              className="weather-icon me-2"
            />

            <div className="temperature-container">
              <span className="temperature">{weatherData.temperature}</span>

              <span className="unit ms-1">°F</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul className="list-unstyled">
            <li>{weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
      <WeatherForecast city={weatherData.city} />
    </div>
  );
}
