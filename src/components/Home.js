import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import { Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import "../components/nav/NavBar.css"
import "./Home.css"
import FetchQuote from "./quote/QuoteProvider";


export const Home = () => {

    const [weather, setWeather] = useState({});

    const quote = FetchQuote();
    const city = `http://localhost:8088/userSettings/settings/localWeatherSettings/${city}`
    const state = `http://localhost:8088/userSettings/settings/localWeatherSettings/${state}`
    const country = `http://localhost:8088/userSettings/settings/localWeatherSettings/${country}`
    const zip = `http://localhost:8088/userSettings/settings/localWeatherSettings/${zip}`

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
        <div className="homePage">
            <div className="backgroundFilter">
                <div className="top-nav">
                    {/* Top Bar*/}
                    <nav className="navbar navbar-expand-md navbar-light sticky-top" role="navigation">
                        <Nav className="w-100">
                            <div className=" d-flex flex-row justify-content-around w-100">
                                {

                                    <NavLink to={"./settings"} className="nav-link-settings" activeClassName="active">
                                        <div className="row d-flex flex-row justify-content-end">
                                            <FontAwesomeIcon size="lg" icon={faCog} className="settingsCog" />
                                        </div>
                                    </NavLink>

                                }
                            </div>
                        </Nav>
                    </nav>
                </div>

                <section className="main--home">

                    <div className="date">{dateBuilder(new Date())}</div>
                    <div className="localTemp--homeDiv">
                        <h2 className="localTemp--home" onLoad={() =>
                            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&${state}&${country}||zip=${zip})&appid=be83c66a552cdf75a46cb29c6e903fd5`) //**IF YOU WANT FORECAST, IT GOES IN THE WEATHER?Q= LINE TO THE LEFT**
                                .then(res => res.json())
                                .then(setWeather)}>
                            {Math.round(weather.main.temp)}°F</h2>
                    </div>

                    <div className="dailyQuote--homeDiv">
                        <h2 className="dailyQuote--home">{quote}</h2>
                        {/* <h3 className="dailyQuoteSource--home">- ${author}</h3> */}
                    </div>

                </section>
            </div>
        </div>
    )
}
