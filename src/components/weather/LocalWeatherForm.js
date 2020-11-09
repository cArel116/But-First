import React, { useContext, useEffect, useState } from "react"
import { LocalWeatherContext } from "./LocalWeatherProvider"
import { useHistory, useParams } from 'react-router-dom';
import "./Weather.css"
import { Button } from "react-bootstrap";

export const LocalWeatherForm = () => {
    const { localWeather, addLocalWeather, getLocalWeather, updateLocalWeather } = useContext(LocalWeatherContext)

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState(0);

    const history = useHistory();

    // Get customers and animals. If localWeatherId is in the URL, getLocalWeatherById
    useEffect(() => {
        getLocalWeather()
            .then(setIsLoading(false))
    }, [])

    const constructLocalWeatherObject = () => {
        //disable the button - no extra clicks
        setIsLoading(true);

        console.log("it works", localWeather)
        if (localWeather.length !== 0) {
            //PATCH - update
            updateLocalWeather(localWeather[0].id,
                {
                    city,
                    state,
                    country,
                    zip
                })
                .then(() => history.push("/"))
        } else {
            //POST - add
            addLocalWeather({
                city,
                state,
                country,
                zip
            })
                .then(() => history.push("/"))
        }
    }

    return (
        <>
            <h2 className="settingsHeaders weatherSettingsHeader">Weather Settings</h2>
            <fieldset>
                <input type="text" name="weatherCity" className="form-control" placeholder="City"
                    onChange={e => setCity(e.target.value)}
                    value={city} />

                <input type="text" name="weatherState" className="form-control" placeholder="State"
                    onChange={e => setState(e.target.value)}
                    value={state} />

                <input type="text" name="weatherCountry" className="form-control" placeholder="Country"
                    onChange={e => setCountry(e.target.value)}
                    value={country} />

                <p className="or"> - OR - </p>

                <input type="text" name="weatherZip" className="form-control" placeholder="Zip"
                    onChange={e => setZip(e.target.value)}
                    value={zip} />
            </fieldset>

            <div>
                <Button variant="primary"
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