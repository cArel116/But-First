// import React, { useState, createContext, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import { api } from './Weather'

// /*
//     The context is imported and used by individual components
//     that need data
// */
// export const LocalWeatherContext = createContext()

// /*
//  This component establishes what data can be used.
//  */
// export const LocalWeatherProvider = (props) => {
//     const [localWeather, setLocalWeather] = useState([])

//     const { localWeatherId } = useParams();

//     const getLocalWeather = () => {
//         return fetch("http://localhost:8088/userSettings/localWeatherSettings")
//             .then(res => res.json())
//             .then(setLocalWeather)
//     }

//     const getLocalWeatherById = (id) => {
//         return fetch(`http://localhost:8088/userSettings/localWeatherSettings/${id}`)
//             .then(res => res.json())
//     }

//     useEffect(() => {
//         getLocalWeatherById(localWeatherId)
//             .then(() => {
//                 fetch(`${api.base}weather?q=${localWeather.city},${localWeather.state},${localWeather.country},${localWeather.zip}&units=imperial&APPID=${api.key}`)
//             })
//             .then(res => res.json())
//             .then(response => {
//                 setLocalWeather(response);
//                 console.log(response);
//             });
//     }, [])


//     return (
//         <>
//             <section className="localWeather">
//                 <div className="weather-box">
//                     <div className="temp">
//                         {Math.round(localWeather.main.temp)}°F
//                     </div>
//                 </div>
//             </section>

//             <LocalWeatherContext.Provider value={{
//                 localWeather, getLocalWeather, getLocalWeatherById
//             }}>
//                 {props.children}
//             </LocalWeatherContext.Provider>
//         </>
//     )
// }


















// const addLocalWeather = localWeatherObj => {
    //     return fetch("http://localhost:8088/userSettings/localWeatherSettings", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(localWeatherObj)
    //     })
    //         .then(getLocalWeather)
    // }

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