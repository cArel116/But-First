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

    return (

        <BrewMethodContext.Provider value={{
            brewMethod, getBrewMethod, getBrewMethodById
        }}>
            {props.children}
        </BrewMethodContext.Provider>
    )
}