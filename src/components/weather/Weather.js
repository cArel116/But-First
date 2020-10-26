import React, { useState } from 'react';
import "./Weather.css"

const api = {
    key: "be83c66a552cdf75a46cb29c6e903fd5",
    base: "https://api.openweathermap.org/data/2.5/"
}

export const WeatherApp = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`) //**IF YOU WANT FORECAST, IT GOES IN THE WEATHER?Q= LINE TO THE LEFT**
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    return (
        <div className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 60) ? 'weatherApp warm' : 'weatherApp') : 'weatherApp'
        }>
            <main className="weather--main">
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main !== "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weather.main.temp)}°F
                                    </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </div >
    )
}