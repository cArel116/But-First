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
                    {
                        brewMethod.map(coffee => {
                            return <CoffeeCard key={coffee.id} coffee={coffee} />
                        })
                    }
                    <section className="currentBrewSettings">
                        <div className="savedBrew">24oz | 42g</div>
                    </section>

                </div>
            </div>
        </div >
    )
}