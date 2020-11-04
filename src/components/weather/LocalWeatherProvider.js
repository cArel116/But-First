import React, { useState, createContext } from "react"

export const LocalWeatherContext = createContext()

export const LocalWeatherProvider = (props) => {
    const [weather, setLocalWeather] = useState([])

    const getLocalWeather = () => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather.settings.localWeatherSettings.city}, ${weather.settings.localWeatherSettings.state}, ${weather.settings.localWeatherSettings.country}||zip=${weather.settings.localWeatherSettings.zip}&appid=be83c66a552cdf75a46cb29c6e903fd5`)
            .then(res => res.json())
            .then(setLocalWeather)
    }

    const addLocalWeather = (weatherObj) => {
        return fetch("http://localhost:8088/userSettings/settings/localWeatherSettings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(weatherObj)
        })
            .then(getLocalWeather)
    }

    const getLocalWeatherById = (id) => {
        return fetch(`http://localhost:8088/userSettings/settings/localWeatherSettings/${id}`)
            .then(res => res.json())
    }

    const deleteLocalWeather = (id) => {
        return fetch(`http://localhost:8088/userSettings/settings/localWeatherSettings/${id}`, {
            method: "DELETE"
        })
            .then(getLocalWeather)
    }

    const updateLocalWeather = (weather) => {
        return fetch(`http://localhost:8088/userSettings/settings/localWeatherSettings/${weather.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(weather)
        })
            .then(getLocalWeather)
    }

    return (
        <LocalWeatherContext.Provider value={{
            weather, getLocalWeather, addLocalWeather, getLocalWeatherById, deleteLocalWeather, updateLocalWeather
        }}>
            {props.children}
        </LocalWeatherContext.Provider>
    )
}




// "api.openweathermap.org / data / 2.5 / weather ? zip = { zip code }, { country code } & appid={ API key }"

// "api.openweathermap.org / data / 2.5 / weather ? q = { city name }, { state code }, { country code } &  & appid={ API key }"

// `https://api.openweathermap.org/data/2.5/weather?q=${weather.settings.localWeatherSettings.city}, ${weather.settings.localWeatherSettings.state}, ${weather.settings.localWeatherSettings.country}||zip=${weather.settings.localWeatherSettings.zip}&appid=be83c66a552cdf75a46cb29c6e903fd5`