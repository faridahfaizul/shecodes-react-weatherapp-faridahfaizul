import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    //if the coordinates change
    //set loaded to false

    },[props.lat]);

    function getForecast(response) {
        setLoaded(true);
        setForecast(response.data.daily);
    }
 
    if (loaded) {
    return (
        <div className="weather-forecast" id="forecast">
            {forecast.map(function(dailyforecast, index){
                return (
                    <div className="col-2" key={index}>
                        <WeatherForecastDay data={dailyforecast}/>
                    </div>
                )
            })}
        </div>
    )
    } else {        
        let longitude = props.lon;
        let latitude = props.lat;
        let apiKey = `b35c686ba9565ba0ab254c2230937552`;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(url).then(getForecast);
    }
}