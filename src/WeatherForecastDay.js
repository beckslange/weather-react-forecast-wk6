import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
  }
  return (
    <div className="col text-center">
      <div className="forecast-day">{formatDay(props.data.time)}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        className="daily-icon"
      />
      <div className="forecast-temp text-nowrap">
        <span className="temp-max me-1">
          {Math.round(props.data.temperature.maximum)}°F
        </span>{" "}
        <span className="temp-min ms-1 opacity-75">
          {Math.round(props.data.temperature.minimum)}°F
        </span>{" "}
      </div>
    </div>
  );
}
