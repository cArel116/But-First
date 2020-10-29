import React, { useState } from "react"
import "./Coffee.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export const CoffeeCard = ({ coffee }) => {
    // <section className="coffee">
    //     <h3 className="coffee__name">
    //         <button to={`/coffee/${coffee.id}`}>
    //             {coffee.name}
    //         </button>
    //     </h3>
    //     <div className="coffee__breed">{coffee.breed}</div>
    // </section >

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="brewSelectionArea">

            <Button to={`/coffee/${coffee.id}`} className="brewMethod" variant="primary" onClick={handleShow}>
                <img src={coffee.img} alt={coffee.name} />
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

        </div>
    )

}