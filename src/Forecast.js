import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast col">
      <div className="WeatherForecastPreview">
        <div className="forecast-time">Sat</div>
        <img
          src="TO BE INPUTTED"
          alt="WEATHER ICON"
          className="forecast-icon"
          width="64"
          height="64"
        />
        <div className="forecast-temperature">
          <span className="forecast-temperature-max">9°</span>
          <span className="forecast-temperature-min">4°</span>
        </div>
      </div>
    </div>
  );
}
