import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import "../nav/NavBar.css"
import "./Settings.css"
import { LocalWeatherForm } from "../weather/LocalWeatherForm";
import { BrewMethodForm } from "../coffee/CoffeeForm";

export const Settings = () => {

    const localWeatherSettings = LocalWeatherForm();
    const brewMethodSettings = BrewMethodForm();

    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push("/login");
    }

    return (
        <main style={{ textAlign: "center" }}>
            <div className="settingsBackgroundImg">
                <div className="backgroundFilter">
                    <form className="form--settings" >
                        <div className="wrapperDiv">
                            <div className="coffeeSettings">{brewMethodSettings}</div>
                            <div className="weatherSettings">{localWeatherSettings}</div>
                            <div className="logout">
                                <Button variant="primary" size="sm"
                                    className="settingsButton"
                                    onClick={e => history.push("/")}>
                                    Cancel
                                </Button>
                                <Button variant="primary" size="sm"
                                    className="settingsButton"
                                    onClick={logout}>
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main >
    )
}