import React from "react";
import "./Geopositioning.css";

export default function Geopositioning() {
  return (
    <div className="Geopositioning">
      <div className="row">
        <div className="col-9">
          <img
            src="/images/giraffe_icon.png"
            alt="Giraffe icon"
            className="icon"
          />
          <a href="/" className="locate-me">
            Search my location
          </a>
        </div>
        <div className="col-3 hidden-message"></div>
      </div>
    </div>
  );
}
