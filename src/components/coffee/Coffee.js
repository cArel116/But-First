import React from "react"
import "./Coffee.css"
import FrenchPress from "../../images/frenchpress.png"
import Drip from "../../images/drip.png"
import Espresso from "../../images/espresso.png"
import Chemex from "../../images/chemex.png"

console.log("What up, COFFEE?!")

export const Coffee = () => {
    return (
        <div className="coffeeMain">
            <div className="quadrantImg">
                <div className="coffeeHome">
                    <section className="brewSelectionArea">
                        <div className="brewMethod"><img src={FrenchPress} /></div>
                        <div className="brewMethod"><img src={Drip} /></div>
                        <div className="brewMethod"><img src={Espresso} /></div>
                        <div className="brewMethod"><img src={Chemex} /></div>
                    </section>
                    <section className="currentBrewSettings">
                        {/* <div>Brew Method: </div>
                        <div>Water Amount: </div>
                        <div>Grams of Coffee: </div> */}
                        <div className="savedBrew">24oz | 42g</div>
                    </section>
                </div>
            </div>
        </div>
    )
}