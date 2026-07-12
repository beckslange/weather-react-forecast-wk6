import React from "react";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <img src={props.iconURL} alt="" className="daily-icon" />
          <div className="forecast-temp">
            <span className="temp-max me-1">19°F</span>{" "}
            <span className="divider">|</span>
            <span className="temp-min ms-1 opacity-75">10°F</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
