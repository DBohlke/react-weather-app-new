import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Dani Bohlke and is{" "}
          <a
            href="https://github.com/DBohlke/react-weather-app-new"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://awesome-lewin-3ef0f5.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
