import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
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
        {forecast.slice(0, 5).map(function (day) {
          return <WeatherForecastDay data={day} key={day.time} />;
        })}
      </div>
    </div>
  );
}
