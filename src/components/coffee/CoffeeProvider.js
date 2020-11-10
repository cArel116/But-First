import React, { useState, createContext } from "react"

export const BrewMethodContext = createContext()

export const BrewMethodProvider = (props) => {
    const [brewMethod, setBrewMethod] = useState([])

    const getBrewMethod = () => {
        return fetch("http://localhost:8088/coffees")
            .then(res => res.json())
            .then(setBrewMethod)
    }

    const getBrewMethodById = (id) => {
        return fetch(`http://localhost:8088/coffees/${id}`)
            .then(res => res.json())
    }

    const getBrewMethodProfile = () => {
        return fetch("http://localhost:8088/coffeeSettings")
            .then(res => res.json())
            .then(setBrewMethod)
    }

    // const getBrewMethodProfileById = (id) => {
    //     return fetch(`http://localhost:8088/coffeeSettings/${id}`)
    //         .then(res => res.json())
    // }

    const addBrewMethodProfile = brewMethodObj => {
        return fetch("http://localhost:8088/coffeeSettings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewMethodObj)
        })
            .then(getBrewMethod)
    }

    const updateBrewMethodProfile = (id, brewMethod) => {
        return fetch(`http://localhost:8088/coffeeSettings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewMethod)
        })
            .then(getBrewMethod)
    }

    return (

        <BrewMethodContext.Provider value={{
            brewMethod, getBrewMethod, getBrewMethodProfile, getBrewMethodById, addBrewMethodProfile, updateBrewMethodProfile
        }}>
            {props.children}
        </BrewMethodContext.Provider>
    )
}