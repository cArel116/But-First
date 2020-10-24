import React from 'react';
import "./Weather.css"

const api = {
    key: "be83c66a552cdf75a46cb29c6e903fd5",
    base: "https://api.openweathermap.org/data/2.5/"
}

export const WeatherApp = () => {
    return (
        <div className="weatherApp">
            <main className="weather--main">
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                    />
                </div>
            </main>
        </div>
    )
}