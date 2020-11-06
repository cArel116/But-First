import React, { useContext, useEffect, useState } from "react"
import { BrewMethodContext } from "../coffee/CoffeeProvider"
import { useHistory, useParams } from 'react-router-dom';
import "./Coffee.css"
import { Button } from "react-bootstrap";

export const BrewMethodForm = () => {
    const { addBrewMethod, getBrewMethod, getBrewMethodById, updateBrewMethod } = useContext(BrewMethodContext)

    //for edit, hold on to state of brewMethod in this view
    const [brewMethod, setBrewMethod] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { brewMethodId } = useParams();
    const history = useHistory();


    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newBrewMethod = { ...brewMethod }
        //brewMethod is an object with properties. 
        //set the property to the new value
        newBrewMethod[event.target.name] = event.target.value
        //update state
        setBrewMethod(newBrewMethod)
    }

    // Get customers and animals. If brewMethodId is in the URL, getBrewMethodById
    useEffect(() => {
        getBrewMethod().then(() => {
            if (brewMethodId) {
                getBrewMethodById(brewMethodId)
                    .then(brewMethod => {
                        setBrewMethod(brewMethod)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructBrewMethodObject = () => {
        if (parseInt(brewMethod) === 0) {
            window.alert("Please fill out all fields")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (brewMethodId) {
                //PUT - update
                updateBrewMethod({
                    id: brewMethod.id,
                    name: brewMethod.name,
                    water: brewMethod.water,
                    grams: brewMethod.grams,
                    method: brewMethod.method
                })
                    .then(() => history.push("/"))
            } else {
                //POST - add
                addBrewMethod({
                    name: brewMethod.name,
                    water: brewMethod.water,
                    grams: brewMethod.grams,
                    method: brewMethod.method
                })
                    .then(() => history.push("/"))
            }
        }
    }

    return (
        <>
            <h2 className="settingsHeaders">Coffee Settings</h2>
            <fieldset>
                <input type="text" name="coffeeProfileName" className="form-control" placeholder="Profile Name" autoFocus
                    onChange={handleControlledInputChange}
                    defaultValue={brewMethod.name} />
                <select className="brewMethodDropdown" onChange={handleControlledInputChange}>
                    <option> Select Brew Method </option>
                    <option value="Drip"> Drip </option>
                    <option value="Espresso"> Espresso </option>
                    <option value="French Press"> French Press </option>
                    <option value="Percolator"> Percolator </option>
                </select>
                <input type="number" name="waterAmount" className="form-control" placeholder="Ounces of Water (e.g. 24)"
                    onChange={handleControlledInputChange}
                    defaultValue={brewMethod.water} />
            </fieldset>

            <div className="settingsButton">
                <Button variant="outline-primary"
                    size="sm"
                    disabled={isLoading}
                    onClick={event => {
                        event.preventDefault() // Prevent browser from submitting the form
                        constructBrewMethodObject()
                    }} block>
                    Save Brew Method
                </Button>
            </div>
        </>
    )
}