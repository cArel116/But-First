import React, { useContext, useState, useEffect } from "react"
import { LocalWeatherContext, api } from "./LocalWeatherProvider";
import "./Weather.css"

export const LocalWeather = () => {
    const [weather, setWeather] = useState({
        main: { temp: 0 }
    });
    const { getLocalWeatherWithoutState } = useContext(LocalWeatherContext);

    useEffect(() => {
        getLocalWeatherWithoutState().then((response) => {
            fetch(`${api.base}weather?q=${response[0].city}&units=imperial&APPID=${api.key}`) //**IF YOU WANT FORECAST, IT GOES IN THE WEATHER?Q= LINE TO THE LEFT**
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    console.log(result);
                });
        })
    }, [])

    return (
        <section className="localWeather">
            {/* <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
            </div> */}
            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°F
                </div>
                {/* <div className="weather">{weather.weather[0].main}</div> */}
            </div>
        </section>
    )
}