import React, { useContext, useEffect, useState } from "react"
import { QuoteContext } from "../quote/QuoteProvider"
import "./Quote.css"
import { useHistory, useParams } from 'react-router-dom';

export const QuoteForm = () => {
    const { addQuote, getQuoteById, updateQuote } = useContext(QuoteContext)

    //for edit, hold on to state of quote in this view
    const [quote, setQuote] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { quoteId } = useParams();
    const history = useHistory();


    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newQuote = { ...quote }
        //quote is an object with properties. 
        //set the property to the new value
        newQuote[event.target.name] = event.target.value
        //update state
        setQuote(newQuote)
    }

    // Get customers and locations. If quoteId is in the URL, getQuoteById
    useEffect(() => {
        if (quoteId) {
            getQuoteById(quoteId)
                .then(quote => {
                    setQuote(quote)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    const constructQuoteObject = () => {
        if ((quote.author) === "") {
            window.alert("Please identify author.")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (quoteId) {
                //PUT - update
                updateQuote({
                    id: quote.id,
                    quote: quote.quote,
                    author: quote.author
                })
                    .then(() => history.push(`/quotes/detail/${quote.id}`))
            } else {
                //POST - add
                addQuote({
                    quote: quote.quote,
                    author: quote.author
                })
                    .then(() => history.push("/quotes"))
            }
        }
    }

    return (
        <form className="quoteForm">
            <h2 className="quoteForm__title">New Quote</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="quoteName" name="name" required autoFocus className="form-control"
                        placeholder="Quote..."
                        onChange={handleControlledInputChange}
                        defaultValue={quote.quote} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="quoteBreed" name="breed" required className="form-control" placeholder="Author"
                        onChange={handleControlledInputChange}
                        defaultValue={quote.author} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructQuoteObject()
                }}>
                {quoteId ? <>Save Quote</> : <>Add Quote</>}</button>
        </form>
    )
}