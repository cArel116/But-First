import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
// import { faBalanceScaleLeft, faFeather, faTemperatureLow } from "@fortawesome/free-solid-svg-icons"
// import { NavLink } from "react-router-dom"
// import { Nav } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

            <form className="form--settings" onSubmit={handleRegister}>

                {/* <div className="top-nav">
                    <nav className="navbar navbar-expand-md navbar-light sticky-top" role="navigation">
                        <Nav className="w-100">
                            <div className=" d-flex flex-row justify-content-around w-100">
                                {
                                    <>
                                        <NavLink to={"./coffee--settings"} className="nav-link-userSettings" activeClassName="active">
                                            <div className="row d-flex flex-row justify-content-end">
                                                <FontAwesomeIcon size="lg" icon={faBalanceScaleLeft} className="coffeeSettingsIcon" />
                                            </div>
                                        </NavLink>
                                        <NavLink to={"./quote--settings"} className="nav-link-userSettings" activeClassName="active">
                                            <div className="row d-flex flex-row justify-content-end">
                                                <FontAwesomeIcon size="lg" icon={faFeather} className="quoteSettingsIcon" />
                                            </div>
                                        </NavLink>
                                        <NavLink to={"./weather--settings"} className="nav-link-userSettings" activeClassName="active">
                                            <div className="row d-flex flex-row justify-content-end">
                                                <FontAwesomeIcon size="lg" icon={faTemperatureLow} className="weatherSettingsIcon" />
                                            </div>
                                        </NavLink>
                                    </>
                                }
                            </div>
                        </Nav>
                    </nav>
                </div> */}

                {/* <h1 className="h3 mb-3 font-weight-normal registerHeader">But First... Settings</h1> */}
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

        </main >
    )
}