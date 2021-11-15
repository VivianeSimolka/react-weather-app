import React from "react";
import "./WeatherInfo.css";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import WeatherAnimation from "./WeatherAnimation";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h1>{props.weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.weatherData.date} />
            </li>
            <li className="text-capitalize">
              {props.weatherData.description}, Humidity:
              <strong> {props.weatherData.humidity}%</strong>, Wind:
              <strong> {props.weatherData.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <div className="temperature-container align-items-center d-flex justify-content-end">
            <WeatherAnimation icon={props.weatherData.icon} size={70} />
            <div>
              <span className="temperature">
                {Math.round(props.weatherData.temperature)}
              </span>
              <span className="unit">
                <a href="/" className="active">
                  °C
                </a>{" "}
                |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Forecast lat={props.weatherData.lat} lon={props.weatherData.lon} />
      </div>
    </div>
  );
}
