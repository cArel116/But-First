import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "./Quote.css"

function QuoteProvider() {
    const [quote, setQuote] = useState("");
    // const [loading, setLoading] = useState(true);
    const [author, setAuthor] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //-----------------------------------------//----------------------------------------//

    const history = useHistory();

    //-----------------------------------------//----------------------------------------//

    useEffect(() => {
        getQuote();
        const intervalID = setInterval(() => {
            getQuote()
        }, 24 * 60 * 60 * 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, [])

    function getQuote() {
        fetch('http://localhost:8088/quotes')
            .then(res => res.json())
            .then(quotes => {
                console.log("quote", quotes[0]);
                setQuote(quotes[0].quote);
                setAuthor(quotes[0].author);
            })
    }

    //     return (
    //         <>
    //             <button className="quoteButton" onClick={handleShow}>
    //                 <h2 className="dailyQuote--home">{quote}</h2>
    //                 <p className="dailyQuoteSource--home">- {author}</p>
    //             </button>
    //             <Modal show={show} onHide={handleClose}>
    //                 <Modal.Body closeButton>
    //                     <h2 className="dailyQuote--home">{quote}</h2>
    //                     <p className="dailyQuoteSource--home">- {author}</p>
    //                 </Modal.Body>
    //                 <Modal.Footer>
    //                     <Button variant="primary" size="sm" block onClick={handleClose}>
    //                         Close
    //                     </Button>
    //                 </Modal.Footer>
    //             </Modal>
    //         </>
    //     )
    // }

    //--------------------------------------//----------------------------------------------//

    const deleteQuote = id => {
        return fetch(`http://localhost:8088/quotes/${id}`, {
            method: "DELETE"
        })
            .then(getQuote)
    }

    return (
        <>
            <button className="quoteButton" onClick={handleShow}>
                <h2 className="dailyQuote--home">{quote}</h2>
                <p className="dailyQuoteSource--home">- {author}</p>
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h2 className="dailyQuote--modal">{quote}</h2>
                    <p className="dailyQuoteSource--modal">- {author}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" size="sm" onClick={() => {
                        history.push(`/quotes/edit/${quote.id}`)
                    }}>
                        Edit
                    </Button>
                    <Button variant="primary" size="sm"
                        onClick={
                            () => {
                                deleteQuote(quote.id)
                                    .then(() => {
                                        history.push("/quotes")
                                    })
                            }
                        }>
                        Delete
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

//------------------------------------//--------------------------------------//

export default QuoteProvider