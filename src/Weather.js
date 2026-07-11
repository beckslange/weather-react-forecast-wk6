import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mb-2">
      <form className="w-100 justify-content-center">
        <div className="row mt-1 mb-2">
          <div className="col-9">
            <input
              className="col form-control form-control-lg"
              type="search"
              placeholder="Enter a city..."
              autoFocus
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary w-100 btn-lg"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>

      <div className="city-name">
        <h1>New York</h1>
      </div>
      <div className="date">
        <ul className="list-unstyled">
          <li>Thursday 11:58</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
              alt="Sunny"
              className="weather-icon me-2"
            />

            <div className="current-temp">
              <span className="temperature">11</span>
              <span className="unit ">°F</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="conditions">
            <ul className="list-unstyled">
              <li>Fog</li>
              <li>Humidity: 93%</li>
              <li>Wind: 0.87 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
