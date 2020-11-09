import React, { useState, useEffect, createContext } from "react"
import "./Quote.css"

export const QuoteContext = createContext()

export const QuoteProvider = (props) => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const getQuote = () => {
        fetch('http://localhost:8088/quotes')
            .then(res => res.json())
            .then(quotes => {
                console.log("quote", quotes[0]);
                const getRandomValue = Math.floor(Math.random() * quotes.length);
                setQuote(quotes[getRandomValue].quote);
                setAuthor(quotes[getRandomValue].author);
            })
    }

    //useEffect to randomly generate a new quote from the DB every 24hrs
    useEffect(() => {
        getQuote();
    }, [])


    return (
        <>
            <div className="quoteDiv">
                <h2 className="dailyQuote--home">"{quote}"</h2>
                <p className="dailyQuoteSource--home">- {author}</p>
            </div>
        </>
    )

}