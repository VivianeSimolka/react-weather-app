import React, { useState } from "react";
import "./Forecast.css";
import WeatherAnimation from "./WeatherAnimation";
import axios from "axios";

export default function Forecast(props) {
  let apiKey = "6810fbd82d0a172a870e47bd04543f6c";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=${unit}`;

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  let celciusForecast = [
    { max: 0, min: 0 },
    { max: 0, min: 0 },
    { max: 0, min: 0 },
    { max: 0, min: 0 },
    { max: 0, min: 0 },
  ];

  // function day() {
  //  let date = new Date(props.data.dt * 1000);
  //  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //  return days[date.getDay()];

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast col">
        <div className="WeatherForecastPreview">
          <div className="forecast-time">Sat</div>
          <WeatherAnimation className="icon" icon="09n" size={36} />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">
              {Math.round(Forecast.data.temp.max)}°{" "}
            </span>
            <span className="forecast-temperature-min">
              {Math.round(Forecast.data.temp.min)}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
