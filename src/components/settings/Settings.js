import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import "../nav/NavBar.css"
import "./Settings.css"
import { LocalWeatherContext } from "../weather/LocalWeatherProvider"

export const Settings = (props) => {
    const { addLocalWeather, getLocalWeather, getLocalWeatherById, updateLocalWeather } = useContext(LocalWeatherContext)


    const [localWeather, setLocalWeather] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const { localWeatherId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (e) => {
        const newLocalWeather = { ...localWeather }
        newLocalWeather[e.target.name] = e.target.value
        setLocalWeather(newLocalWeather)
    }

    useEffect(() => {
        getLocalWeather().then(() => {
            if (localWeatherId) {
                getLocalWeatherById(localWeatherId)
                    .then(localWeather => {
                        setLocalWeather(localWeather)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructLocalWeatherObject = () => {
        if ((localWeather.id) === 0) {
            window.alert("Please select a weather location")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (localWeatherId) {
                //PUT - update
                updateLocalWeather({
                    id: localWeather.id,
                    city: localWeather.city,
                    state: localWeather.state,
                    country: localWeather.country,
                    zip: localWeather.zip
                })
                    .then(() => history.push(`/userSettings/settings/localWeatherSettings/${localWeather.id}`))
            } else {
                //POST - add
                addLocalWeather({
                    city: localWeather.city,
                    state: localWeather.state,
                    country: localWeather.country,
                    zip: localWeather.zip
                })
                    .then(() => history.push("/userSettings/settings/localWeatherSettings"))
            }
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <div className="settingsBackgroundImg">
                <div className="backgroundFilter">
                    <form className="form--settings" onSubmit={handleControlledInputChange}>
                        <div className="wrapperDiv">
                            <div className="coffeeSettings">
                                <h2 className="settingsHeaders">Coffee Settings</h2>
                                <fieldset>
                                    <input type="text" name="coffeeProfileName" className="form-control" placeholder="Profile Name" autoFocus />
                                    <select className="brewMethodDropdown">
                                        <option> Select Brew Method </option>
                                        <option value="Drip"> Drip </option>
                                        <option value="Espresso"> Espresso </option>
                                        <option value="French Press"> French Press </option>
                                        <option value="Percolator"> Percolator </option>
                                    </select>
                                    <input type="number" name="waterAmount" className="form-control" placeholder="Ounces of Water (e.g. 24)" />
                                </fieldset>
                            </div>


                            <div className="weatherSettings">
                                <h2 className="settingsHeaders">Weather Settings</h2>
                                <fieldset>
                                    <input type="text" name="weatherCity" className="form-control" placeholder="City" />
                                    <input type="text" name="weatherState" className="form-control" placeholder="State" />
                                    <input type="text" name="weatherCountry" className="form-control" placeholder="Country" />
                                    <p className="or"> - OR - </p>
                                    <input type="text" name="weatherZip" className="form-control" placeholder="Zip" />
                                </fieldset>
                            </div>

                            <div className="quoteSettings">
                                <h2 className="settingsHeaders">Daily Quote Settings</h2>
                                <fieldset>
                                    <input type="text" name="quoteSource" className="form-control" placeholder="Source..." />
                                </fieldset>
                            </div>
                            <div className="settingsButton">
                                <Button variant="outline-primary"
                                    type="submit"
                                    disabled={isLoading}
                                    onClick={event => {
                                        event.preventDefault() // Prevent browser from submitting the form
                                        constructLocalWeatherObject()
                                    }}> Save </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </main >
    )
}