import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "./Quote.css"

function FetchQuote() {
    const [quote, setQuote] = useState("");
    // const [loading, setLoading] = useState(true);
    const [author, setAuthor] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Button variant="primary" size="sm">
                        Edit
                    </Button>
                    <Button variant="primary" size="sm">
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
export default FetchQuote