// import React, { useContext, useEffect, useState } from "react"
// import { BrewMethodContext } from "./CoffeeProvider"
// import "./Coffee.css"

// export const BrewMethodProfile = () => {
//     const { getBrewMethodProfile, getBrewMethodProfileById } = useContext(BrewMethodContext)
//     const [brewMethod, setBrewMethod] = useState({})

//     useEffect(() => {
//         getBrewMethodProfile().then((brewMethodId) => {
//             getBrewMethodProfileById(brewMethodId)
//                 .then(brewMethod => {
//                     setBrewMethod(brewMethod)
//                 }, [])
//         })
//     })

//     return (
//         <>
//             <h3 className="savedBrewh3">Current Profile</h3>
//             <div className="savedBrewSpecs">{brewMethod.water} | 42g</div>
//             <div className="savedBrewMethod">Drip</div>
//         </>
//     )
// }