import React, { useState } from "react"
import "./Coffee.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


export const CoffeeCard = ({ coffee }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button to={`/coffee/${coffee.id}`} className="brewMethod" variant="primary" onClick={handleShow}>
                <Image src={coffee.img} alt={coffee.name} />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{coffee.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <fieldset>
                        <input type="number" name="waterAmount" className="form-control" placeholder="Ounces of Water (e.g. 24)" />
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" size="sm" block onClick={handleClose}>
                        Calculate
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )

}