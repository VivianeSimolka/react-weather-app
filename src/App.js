import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Geopositioning from "./Geopositioning";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState("Berlin");
  // const [unit, setUnit] = useState("metric");
  let unit = "metric";

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      city: response.data.name,
    });
  }

  function callAPI() {
    const apiKey = "485e84787811d6e504c528765edb36fe";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    callAPI();
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="App">
        <div className="container">
          <div className="Weather">
            <Geopositioning />
            <form className="Form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Please type a city"
                    autoComplete="off"
                    className="form-control search-input"
                    autoFocus="on"
                    onChange={handleInput}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    className="btn btn-primary w-100"
                    value="Search"
                  />
                </div>
              </div>
            </form>
            <br />
            <WeatherInfo weatherData={weatherData} />
            <br />
            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    callAPI();
    return "Loading...";
  }
}
