import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <a
        href="https://github.com/VivianeSimolka/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open source code
      </a>
      <span> </span>
      by Viviane
      <img src="/images/giraffe_icon.png" alt="Giraffe icon" className="icon" />
    </footer>
  );
}
