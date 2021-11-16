import React from "react";
import WeatherAnimation from "./WeatherAnimation";

export default function DailyForecast(props) {
  function formatDate() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  return (
    <div className="DailyForecast col">
      <div className="forecast-time">{formatDate()}</div>
      <WeatherAnimation
        className="icon"
        icon={props.data.weather[0].icon}
        size={36}
      />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">
          {Math.round(props.data.temp.max)}°{" "}
        </span>
        <span className="forecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
