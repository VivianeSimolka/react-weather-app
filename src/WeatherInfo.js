import React, { useState } from "react";
import "./WeatherInfo.css";
import Forecast from "./Forecast";
import axios from "axios";

export default function WeatherInfo(props) {
  const apiKey = "485e84787811d6e504c528765edb36fe";
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("metric");
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${unit}&appid=${apiKey}`;

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      date: "Friday November 12, 2021 at 16:46",
      description: response.data.weather[0].description,
      imgURL: "http://openweathermap.org/img/wn/04d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">
            <h1>{city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">
                {weatherData.description}, Humidity:
                <strong> {weatherData.humidity}%</strong>, Wind:
                <strong> {weatherData.wind}km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="temperature-container align-items-center d-flex justify-content-end">
              <img src={weatherData.imgURL} alt={weatherData.description} />
              <div>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
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
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
      </div>
    );
  } else {
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
