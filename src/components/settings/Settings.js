import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import "../nav/NavBar.css"
import "./Settings.css"

export const Settings = (props) => {
    const coffeeSettings = useRef()
    const localWeatherSettings = useRef()
    const dailyQuoteSettings = useRef()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()
    }

    return (
        <main style={{ textAlign: "center" }}>

            <div className="settingsBackgroundImg">
                <div className="backgroundFilter">
                    <form className="form--settings" onSubmit={handleRegister}>
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
                                <button type="submit"> Save </button>
                                {/* <button onClick={e => history.push("/Login")}> Cancel </button> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </main >
    )
}