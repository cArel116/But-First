import React from "react";
import "./Home.css"

export const Home = () => (
    <>
        <section className="main--home">
            <div className="dailyQuote--homeDiv">
                <h2 className="dailyQuote--home">"This is how God loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."</h2>
                <h3 className="dailyQuoteSource--home">- John 3:16, ESV</h3>
            </div>

            <div className="localTemp--homeDiv">
                <h2 className="localTemp--home">76°</h2>
            </div>
        </section>
    </>
)
