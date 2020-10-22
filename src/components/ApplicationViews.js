import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CoffeeCard } from "./coffee/CoffeeCard"


export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/coffee */}
            <Route path="/coffee">
                <CoffeeCard />
            </Route>
        </>
    )
}