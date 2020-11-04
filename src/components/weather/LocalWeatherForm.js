import React, { useContext, useEffect, useState } from "react"
import { LocalWeatherContext } from "./LocalWeatherProvider"
import "./Weather.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocalWeatherForm = () => {
    const { addLocalWeather, getLocalWeather, getLocalWeatherById, updateLocalWeather } = useContext(LocalWeatherContext)

    //for edit, hold on to state of localWeather in this view
    const [localWeather, setLocalWeather] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { localWeatherId } = useParams();
    const history = useHistory();


    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newLocalWeather = { ...localWeather }
        //localWeather is an object with properties. 
        //set the property to the new value
        newLocalWeather[event.target.name] = event.target.value
        //update state
        setLocalWeather(newLocalWeather)
    }

    // Get customers and animals. If localWeatherId is in the URL, getLocalWeatherById
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
        if (parseInt(localWeather) === 0) {
            window.alert("Please fill out all fields")
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
                    .then(() => history.push(`/localWeatherSettings/detail/${localWeather.id}`))
            } else {
                //POST - add
                addLocalWeather({
                    city: localWeather.city,
                    state: localWeather.state,
                    country: localWeather.country,
                    zip: localWeather.zip
                })
                    .then(() => history.push("/localWeatherSettings"))
            }
        }
    }

    return (
        <form className="localWeatherForm">
            <h2 className="settingsHeaders">Weather Settings</h2>
            <fieldset>
                <input type="text" name="weatherCity" className="form-control" placeholder="City"
                    onChange={handleControlledInputChange}
                    defaultValue={localWeather.city} />
                <input type="text" name="weatherState" className="form-control" placeholder="State"
                    onChange={handleControlledInputChange}
                    defaultValue={localWeather.state} />
                <input type="text" name="weatherCountry" className="form-control" placeholder="Country"
                    onChange={handleControlledInputChange}
                    defaultValue={localWeather.country} />
                <p className="or"> - OR - </p>
                <input type="text" name="weatherZip" className="form-control" placeholder="Zip"
                    onChange={handleControlledInputChange}
                    defaultValue={localWeather.zip} />
            </fieldset>

            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructLocalWeatherObject()
                }}>
                {localWeatherId ? <>Save LocalWeather</> : <>Add LocalWeather</>}</button>
        </form>
    )
}