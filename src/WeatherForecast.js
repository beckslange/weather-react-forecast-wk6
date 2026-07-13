import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    function displayForecast(response) {
      console.log(response.data);
      setForecast(response.data.daily);
    }

    let apiKey = "tfo33b89af42954f2d60430a801e1b3c";
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=imperial`;

    axios.get(apiURL).then(displayForecast);
  }, [props.city]);

  if (forecast === null) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <img
            src={forecast[0].condition.icon_url}
            alt={forecast[0].condition.description}
            className="daily-icon"
          />
          <div className="forecast-temp">
            <span className="temp-max me-1">
              {Math.round(forecast[0].temperature.maximum)}°F
            </span>{" "}
            <span className="divider">|</span>
            <span className="temp-min ms-1 opacity-75">10°F</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
