import React from "react"
import { Route } from "react-router-dom"
import { BrewMethodList } from "./coffee/CoffeeList"
import { BrewMethodProvider } from "./coffee/CoffeeProvider"
import { Home } from "./Home"
import { Settings } from "./settings/Settings"
import { LocalWeatherProvider } from "./weather/LocalWeatherProvider"
import { WeatherApp } from "./weather/Weather"


export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}

            <BrewMethodProvider>
                <LocalWeatherProvider>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/settings">
                        <Settings />
                    </Route>

                    <Route exact path="/coffee">
                        <BrewMethodList />
                    </Route>

                    <Route exact path="/weather">
                        <WeatherApp />
                    </Route>
                </LocalWeatherProvider>
            </BrewMethodProvider>
        </>
    )
}