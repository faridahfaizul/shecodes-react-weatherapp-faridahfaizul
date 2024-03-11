import React from 'react';
import Weather from "./Weather.js";

import './App.css';

function App() {
  return (
     <div className="app">
      <Weather city="Perak"/>
      <footer>
        <p>
          This project was coded by{" "}
          <a href="https://github.com/faridahfaizul" target="_blank" rel="noreferrer">
            Faridah Faizul
          </a>{" "}
          and is{" "}
          <a href="https://github.com/faridahfaizul/shecodes-react-weatherapp-project" target="_blank" rel="noreferrer">
            on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-react-weather-faridahfaizul.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
