// import React, { useEffect } from "react"
// import { LocalWeatherContext } from "./LocalWeatherProvider";
// import "./Weather.css"

// export const LocalWeather = () => {
//     const { getLocalWeatherById } = useContext(LocalWeatherContext)
//     const [localWeather, setLocalWeather] = useState({});

//     const { localWeatherId } = useParams();

//     useEffect(() => {
//         getLocalWeatherById(localWeatherId)
//             .then(() => {
//                 fetch(`${api.base}weather?q=${localWeather.city},${localWeather.state},${localWeather.country},${localWeather.zip}&units=imperial&APPID=${api.key}`)
//             })
//             .then((response) => {
//                 setLocalWeather(response);
//                 console.log(response);
//             });
//     }, [])

//     return (
//         <section className="localWeather">
//             <div className="location-box">
//                 <div className="location">{localWeather.name}, {localWeather.sys.country}</div>
//             </div>
//             <div className="weather-box">
//                 <div className="temp">
//                     {Math.round(localWeather.main.temp)}°F
//                 </div>
//                 <div className="weather">{localWeather.weather[0].main}</div>
//             </div>
//         </section>
//     )
// }