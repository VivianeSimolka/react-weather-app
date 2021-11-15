import React from "react";
import "./Forecast.css";
import WeatherAnimation from "./WeatherAnimation";

export default function Forecast(props) {
  return (
    <div className="Forecast col">
      <div className="WeatherForecastPreview">
        <div className="forecast-time">Sat</div>
        <WeatherAnimation className="icon" icon="09n" size={36} />
        <div className="forecast-temperature">
          <span className="forecast-temperature-max">
            {props.input.temp.max}°{" "}
          </span>
          <span className="forecast-temperature-min">
            {props.input.temp.min}°
          </span>
        </div>
      </div>
    </div>
  );
}
