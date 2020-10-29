import React from "react"
import { Route } from "react-router-dom"
import { BrewMethodList } from "./coffee/CoffeeList"
import { BrewMethodProvider } from "./coffee/CoffeeProvider"
import { Home } from "./Home"
import { Settings } from "./settings/Settings"
import { WeatherApp } from "./weather/Weather"


export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/settings">
                <Settings />
            </Route>

            <BrewMethodProvider>
                <Route exact path="/coffee">
                    <BrewMethodList />
                </Route>
            </BrewMethodProvider>

            <Route exact path="/weather">
                <WeatherApp />
            </Route>
        </>
    )
}