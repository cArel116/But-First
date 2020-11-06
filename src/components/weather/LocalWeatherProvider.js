import React, { useState, createContext, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LocalWeatherContext = createContext()

/*
 This component establishes what data can be used.
 */
export const LocalWeatherProvider = (props) => {
    const [localWeather, setLocalWeather] = useState([])


    const getLocalWeather = () => {
        return fetch("http://localhost:8088/userSettings/localWeatherSettings")
            .then(res => res.json())
            .then(setLocalWeather)
    }

    const addLocalWeather = localWeatherObj => {
        return fetch("http://localhost:8088/userSettings/localWeatherSettings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(localWeatherObj)
        })
            .then(getLocalWeather)
    }

    const getLocalWeatherById = (id) => {
        return fetch(`http://localhost:8088/userSettings/localWeatherSettings/${id}`)
            .then(res => res.json())
    }

    const updateLocalWeather = localWeather => {
        return fetch(`http://localhost:8088/localWeatherSettings/${localWeather.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(localWeather)
        })
            .then(getLocalWeather)
    }

    return (
        <>
            <LocalWeatherContext.Provider value={{
                localWeather, getLocalWeather, getLocalWeatherById, addLocalWeather, updateLocalWeather
            }}>
                {props.children}
            </LocalWeatherContext.Provider>
        </>
    )
}




















    // const deleteLocalWeather = localWeatherId => {
    //     return fetch(`http://localhost:8088/userSettings/localWeatherSettings/${localWeatherId}`, {
    //         method: "DELETE"
    //     })
    //         .then(getLocalWeather)
    // }

    // const updateLocalWeather = localWeather => {
    //     return fetch(`http://localhost:8088/userSettings/localWeatherSettings/${localWeather.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(localWeather)
    //     })
    //         .then(getLocalWeather)
    // }