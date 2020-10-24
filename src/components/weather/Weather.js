import React from 'react';
import "./Weather.css"

const api = {
    key: "be83c66a552cdf75a46cb29c6e903fd5",
    base: "https://api.openweathermap.org/data/2.5/"
}

export const WeatherApp = () => {

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
        <div className="weatherApp">
            <main className="weather--main">
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                    />
                </div>
                <div className="location-box">
                    <div className="location">Nashville, US</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
            </main>
        </div>
    )
}