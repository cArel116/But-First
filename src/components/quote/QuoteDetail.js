import React, { useContext, useEffect, useState } from "react"
import { QuoteContext } from "./QuoteProvider"
import "./Quote.css"
import { useParams, useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export const QuoteDetail = () => {
    const { deleteQuote, getQuoteById } = useContext(QuoteContext)

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { quoteId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", quoteId)
        getQuoteById(quoteId)
            .then((response) => {
                setQuote(response)
                setAuthor(response.author)
            })
    }, [])

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
                            }}>
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