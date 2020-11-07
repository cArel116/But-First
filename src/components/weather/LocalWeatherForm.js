import React, { useContext, useEffect, useState } from "react"
import { LocalWeatherContext } from "./LocalWeatherProvider"
import { useHistory, useParams } from 'react-router-dom';
import "./Weather.css"
import { Button } from "react-bootstrap";

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
        //disable the button - no extra clicks
        setIsLoading(true);
        if (localWeatherId) {
            //PUT - update
            updateLocalWeather({
                id: localWeather.id,
                city: localWeather.city,
                state: localWeather.name,
                country: localWeather.country,
                zip: localWeather.zip
            })
                .then(() => history.push("/"))
        } else {
            //POST - add
            addLocalWeather({
                city: localWeather.city,
                state: localWeather.name,
                country: localWeather.country,
                zip: localWeather.zip
            })
                .then(() => history.push("/"))
        }
    }

    return (
        <>
            <h2 className="settingsHeaders weatherSettingsHeader">Weather Settings</h2>
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

            <div>
                <Button variant="outline-primary"
                    className="settingsButton"
                    size="sm"
                    disabled={isLoading}
                    onClick={event => {
                        event.preventDefault() // Prevent browser from submitting the form
                        constructLocalWeatherObject()
                    }}>
                    Save Location
                </Button>
            </div>
        </>
    )
}