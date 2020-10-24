import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { SettingsNav } from "./nav/NavBar"
import { WeatherApp } from "./weather/Weather"


export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                {/* <SettingsNav /> */}
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/coffee */}
            {/* <Route path="/coffee">
                <BrewMethodCard />
            </Route> */}

            <Route exact path="/weather">
                <WeatherApp />
            </Route>
        </>
    )
}