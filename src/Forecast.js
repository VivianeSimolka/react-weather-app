import React, { useState, useEffect } from "react";
import "./Forecast.css";
import DailyForecast from "./DailyForecast";

import axios from "axios";

export default function Forecast(props) {
  let apiKey = "6810fbd82d0a172a870e47bd04543f6c";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=${unit}`;

  let [forecastData, setForecastData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <DailyForecast data={forecastData[0]} />
          <DailyForecast data={forecastData[1]} />
          <DailyForecast data={forecastData[2]} />
          <DailyForecast data={forecastData[3]} />
          <DailyForecast data={forecastData[4]} />
        </div>
      </div>
    );
  } else {
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
