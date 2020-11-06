import React, { useState, createContext } from "react"

export const BrewMethodContext = createContext()

export const BrewMethodProvider = (props) => {
    const [brewMethod, setBrewMethod] = useState([])

    const getBrewMethod = () => {
        return fetch("http://localhost:8088/coffee")
            .then(res => res.json())
            .then(setBrewMethod)
    }

    const getBrewMethodById = (id) => {
        return fetch(`http://localhost:8088/coffee/${id}`)
            .then(res => res.json())
    }

    const addBrewMethod = brewMethodObj => {
        return fetch("http://localhost:8088/userSettings/coffeeSettings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewMethodObj)
        })
            .then(getBrewMethod)
    }

    const updateBrewMethod = brewMethod => {
        return fetch(`http://localhost:8088/userSettings/coffeeSettings/${brewMethod.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewMethod)
        })
            .then(getBrewMethod)
    }

    return (

        <BrewMethodContext.Provider value={{
            brewMethod, getBrewMethod, getBrewMethodById, addBrewMethod, updateBrewMethod
        }}>
            {props.children}
        </BrewMethodContext.Provider>
    )
}