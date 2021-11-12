import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  let weatherData = {
    city: "Berlin",
    date: "Friday November 12, 2021 at 16:46",
    description: "Overcast Clouds",
    imgURL: "http://openweathermap.org/img/wn/04d@2x.png",
    humidity: 89,
    wind: 3,
    temperature: 5,
  };
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li>
              {weatherData.description}, Humidity:
              <strong> {weatherData.humidity}%</strong>, Wind:
              <strong> {weatherData.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <img src={weatherData.imgURL} alt={weatherData.description} />
            <div>
              <span className="temperature">{weatherData.temperature}</span>
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
    </div>
  );
}
