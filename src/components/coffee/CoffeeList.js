import React, { useContext, useEffect } from "react"
import { CoffeeCard } from "./CoffeeCard"
import { BrewMethodContext } from "./CoffeeProvider"
import "./Coffee.css"


export const BrewMethodList = () => {
    const { brewMethod, getBrewMethod } = useContext(BrewMethodContext)

    useEffect(() => {
        getBrewMethod()

    }, [])

    return (
        <div className="coffeeMain">
            <div className="quadrantImg">
                <div className="coffeeHome">
                    <section className="brewSelectionArea">
                        {
                            brewMethod.map(coffee => {
                                return <CoffeeCard key={coffee.id} coffee={coffee} />
                            })
                        }
                    </section>
                    <section className="currentBrewSettings">
                        <h3 className="savedBrewh3">Current Profile</h3>
                        <div className="savedBrewSpecs">24oz | 42g</div>
                        <div className="savedBrewMethod">Drip</div>
                    </section>
                </div>
            </div>
        </div >
    )
}