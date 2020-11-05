import React, { useState, useEffect, createContext } from "react"
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "./Quote.css"

export const QuoteContext = createContext()

export const QuoteProvider = (props) => {
    const [quote, setQuote] = useState("");
    // const [loading, setLoading] = useState(true);
    const [author, setAuthor] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //-----------------------------------------//----------------------------------------//

    const history = useHistory();

    //-----------------------------------------//----------------------------------------//

    const getQuote = () => {
        fetch('http://localhost:8088/quotes')
            .then(res => res.json())
            .then(quotes => {
                console.log("quote", quotes[0]);
                setQuote(quotes[0].quote);
                setAuthor(quotes[0].author);
            })
    }
    //--------------------------------------//----------------------------------------------//

    const addQuote = quoteObj => {
        return fetch("http://localhost:8088/quotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quoteObj)
        })
            .then(getQuote)
    }

    const getQuoteById = (id) => {
        return fetch(`http://localhost:8088/quotes/${id}`)
            .then(res => res.json())
    }

    const updateQuote = quote => {
        return fetch(`http://localhost:8088/quotes/${quote.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quote)
        })
            .then(getQuote)
    }



    const deleteQuote = id => {
        return fetch(`http://localhost:8088/quotes/${id}`, {
            method: "DELETE"
        })
            .then(getQuote)
    }

    //useEffect to randomly generate a new quote from the DB every 24hrs
    useEffect(() => {
        getQuote();
        const intervalID = setInterval(() => {
            getQuote()
        }, 24 * 60 * 60 * 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, [])


    return (
        <>
            <div className="quoteDiv">
                <h2 className="dailyQuote--home">{quote}</h2>
                <p className="dailyQuoteSource--home">- {author}</p>
            </div>

            <QuoteContext.Provider value={{
                quote, getQuote, addQuote, getQuoteById, deleteQuote, updateQuote
            }}>
                {props}
            </QuoteContext.Provider>
        </>
    )

}

//------------------------------------//--------------------------------------//








//-----------------------Return for using Modal to Add, Delete Quote---------------------//

// return (
//     <>
//         <button className="quoteButton" onClick={handleShow}>
//             <h2 className="dailyQuote--home">{quote}</h2>
//             <p className="dailyQuoteSource--home">- {author}</p>
//         </button>
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Body>
//                 <h2 className="dailyQuote--modal">{quote}</h2>
//                 <p className="dailyQuoteSource--modal">- {author}</p>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="primary" size="sm" onClick={() => {
//                     history.push(`/quotes/edit/${quote.id}`)
//                 }}>
//                     Edit
//                 </Button>
//                 <Button variant="primary" size="sm"
//                     onClick={
//                         () => {
//                             deleteQuote(quote.id)
//                                 .then(() => {
//                                     history.push("/quotes")
//                                 })
//                         }
//                     }>
//                     Delete
//                 </Button>
//                 <Button variant="primary" size="sm" onClick={handleClose}>
//                     Close
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     </>
// )