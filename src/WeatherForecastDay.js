import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return temperature;
    }

    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return temperature;
    }

return (
    <div>
        <div className="forecast-date">{day()}</div>
        <WeatherIcon icon={props.data.weather[0].icon} size={36}/>
        <div className="forecast-temp">
            <div className="forecast-temperature">{minTemperature()}</div>
            <div className="forecast-temperature-unit">°C</div>
            <div className="forecast-temperature-max">{maxTemperature()}</div>
            <div className="forecast-temperature-unit-max">°C</div>
        </div>
    </div>
);
}