// import React, { useState, useEffect } from "react"
// import { useHistory } from "react-router-dom"
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import "./Quote.css"

// export const QuoteProvider = () => {
//     const [quote, setQuote] = useState("");
//     // const [loading, setLoading] = useState(true);
//     const [author, setAuthor] = useState("");

//     const [show, setShow] = useState(false);
//     const history = useHistory();

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);


//     useEffect(() => {
//         getQuote();
//         const intervalID = setInterval(() => {
//             getQuote()
//         }, 24 * 60 * 60 * 1000);
//         return () => {
//             clearInterval(intervalID);
//         }
//     }, [])

//     function getQuote() {
//         fetch('http://localhost:8088/quotes')
//             .then(res => res.json())
//             .then(quotes => {
//                 console.log("quote", quotes[0]);
//                 setQuote(quotes[0].quote);
//                 setAuthor(quotes[0].author);
//             })
//     }

//     const deleteQuote = id => {
//         return fetch(`http://localhost:8088/quotes/${id}`, {
//             method: "DELETE"
//         })
//             .then(getQuote)
//     }

//     return (
//         <>
//             <button className="quoteButton" onClick={handleShow}>
//                 <h2 className="dailyQuote--home">{quote}</h2>
//                 <p className="dailyQuoteSource--home">- {author}</p>
//             </button>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Body>
//                     <h2 className="dailyQuote--modal">{quote}</h2>
//                     <p className="dailyQuoteSource--modal">- {author}</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="primary" size="sm" onClick={() => {
//                         history.push(`/quotes/edit/${quote.id}`)
//                     }}>
//                         Edit
//                     </Button>
//                     <Button variant="primary" size="sm"
//                         onClick={
//                             () => {
//                                 deleteQuote(quote.id)
//                                     .then(() => {
//                                         history.push("/quotes")
//                                     })
//                             }
//                         }>
//                         Delete
//                     </Button>
//                     <Button variant="primary" size="sm" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }



import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const QuoteContext = createContext()

/*
 This component establishes what data can be used.
 */
export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getQuotes = () => {
        return fetch("http://localhost:8088/quotes")
            .then(res => res.json())
            .then(setQuotes)
    }

    const addQuote = quoteObj => {
        return fetch("http://localhost:8088/quotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quoteObj)
        })
            .then(getQuotes)
    }

    const getQuoteById = (id) => {
        return fetch(`http://localhost:8088/quotes/${id}`)
            .then(res => res.json())
    }

    const deleteQuote = quoteId => {
        return fetch(`http://localhost:8088/quotes/${quoteId}`, {
            method: "DELETE"
        })
            .then(getQuotes)
    }

    const updateQuote = quote => {
        return fetch(`http://localhost:8088/quotes/${quote.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quote)
        })
            .then(getQuotes)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <QuoteContext.Provider value={{
            quotes, getQuotes, addQuote, getQuoteById, deleteQuote, updateQuote, setSearchTerms, searchTerms
        }}>
            {props.children}
        </QuoteContext.Provider>
    )
}