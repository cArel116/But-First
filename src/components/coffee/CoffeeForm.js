import React, { useContext, useEffect, useState } from "react"
import { BrewMethodContext } from "../coffee/CoffeeProvider"
import { useHistory } from 'react-router-dom';
import "./Coffee.css"
import { Button } from "react-bootstrap";

export const BrewMethodForm = () => {
    const { brewMethod, addBrewMethodProfile, getBrewMethodProfile, updateBrewMethodProfile } = useContext(BrewMethodContext)

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [water, setWater] = useState('');
    const [grams, setGrams] = useState('');
    const [method, setMethod] = useState('');

    const history = useHistory();

    useEffect(() => {
        getBrewMethodProfile()
            .then(setIsLoading(false))
    }, [])

    const constructBrewMethodProfileObject = () => {
        //disable the button - no extra clicks
        setIsLoading(true);

        if (brewMethod.length !== 0) {
            //PATCH - update
            updateBrewMethodProfile(brewMethod[0].id,
                {
                    name,
                    water,
                    grams,
                    method
                })
                .then(() => history.push("/"))
        } else {
            //POST - add
            addBrewMethodProfile({
                name,
                water,
                grams,
                method
            })
                .then(() => history.push("/"))
        }

    }

    return (
        <>
            <h2 className="settingsHeaders">Coffee Settings</h2>
            <fieldset>
                <input type="text" name="coffeeProfileName" className="form-control" placeholder="Profile Name" autoFocus
                    onChange={e => setName(e.target.value)}
                    value={name} />
                <select className="brewMethodDropdown" onChange={e => setMethod(e.target.value)}>
                    <option> Select Brew Method </option>
                    <option value="Drip"> Drip </option>
                    <option value="Espresso"> Espresso </option>
                    <option value="French Press"> French Press </option>
                    <option value="Percolator"> Percolator </option>
                </select>
                <input type="number" name="waterAmount" className="form-control" placeholder="Ounces of Water (e.g. 24)"
                    onChange={e => setWater(e.target.value)}
                    value={water} />
            </fieldset>

            <div>
                <Button variant="primary"
                    className="settingsButton"
                    size="sm"
                    disabled={isLoading}
                    onClick={event => {
                        event.preventDefault() // Prevent browser from submitting the form
                        constructBrewMethodProfileObject()
                    }}>
                    Save Method
                </Button>
            </div>
        </>
    )
}