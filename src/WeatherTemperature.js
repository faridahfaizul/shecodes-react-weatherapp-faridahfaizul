import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherTemperature(props) {
    let [unit, setUnit] = useState ("C");
    let [checkUnit, setCheckUnit] = useState ("F");
    let [temperature, setTemperature] = useState(props.temperature);

    function getFahrenheit(e) {
        e.preventDefault();
        setUnit("F");
        setCheckUnit("C");
        setTemperature(Math.round((props.temperature * 9) / 5 + 32));
    }

    function getCelsius(event) {
    event.preventDefault();
    setUnit("C");
    setCheckUnit("F");
    setTemperature(props.temperature);
  }

  if (unit === "C") {
    return (
        <div className="weather-temperature">            
            <div className="search-icon"><WeatherIcon icon={props.icon}/></div>
            <div>
              <h2 className="search-temperature" id="search-temperature">{props.temperature}</h2>
            </div>
            <div>
              <h2 className="search-temperature-unit">
                °{unit} | {" "}<a href="/" onClick={getFahrenheit}>°{checkUnit}</a>
              </h2>
            </div>
        </div>
    )
  } else {
    return (
        <div className="weather-temperature">            
            <div className="search-icon"><WeatherIcon icon={props.icon}/></div>
            <div>
              <h2 className="search-temperature" id="search-temperature">{temperature}</h2>
            </div>
            <div>
              <h2 className="search-temperature-unit">
                °{unit} | {" "}<a href="/" onClick={getCelsius}>°{checkUnit}</a>
              </h2>
            </div>
        </div>
    )
  }
}