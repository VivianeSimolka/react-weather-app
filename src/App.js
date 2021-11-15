import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Geopositioning from "./Geopositioning";
import Form from "./Form";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather">
          <Geopositioning />
          <Form />
          <br />
          <WeatherInfo defaultCity="Berlin" />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}
