import React, { useState, createContext, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const api = {
    key: "be83c66a552cdf75a46cb29c6e903fd5",
    base: "https://api.openweathermap.org/data/2.5/"
}

export const LocalWeatherContext = createContext()

/*
 This component establishes what data can be used.
 */
export const LocalWeatherProvider = (props) => {
    const [localWeather, setLocalWeather] = useState([])

    const getLocalWeather = () => {
        return fetch("http://localhost:8088/localWeatherSettings")
            .then(res => res.json())
            .then(setLocalWeather)
    }

    const getLocalWeatherWithoutState = () => {
        return fetch("http://localhost:8088/localWeatherSettings")
            .then(res => res.json())
    }

    const addLocalWeather = localWeatherObj => {
        return fetch("http://localhost:8088/localWeatherSettings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(localWeatherObj)
        })
            .then(getLocalWeather)
    }

    const getLocalWeatherById = (id) => {
        return fetch(`http://localhost:8088/localWeatherSettings/${id}`)
            .then(res => res.json())
    }

    const updateLocalWeather = (id, localWeather) => {
        return fetch(`http://localhost:8088/localWeatherSettings/${id}`, {
            method: "PATCH",
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
                localWeather, getLocalWeather, getLocalWeatherWithoutState, getLocalWeatherById, addLocalWeather, updateLocalWeather
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