import React, { useState } from "react"
import "./Coffee.css"
import FrenchPress from "../../images/frenchpress.png"
import Drip from "../../images/drip.png"
import Espresso from "../../images/espresso.png"
import Chemex from "../../images/chemex.png"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

console.log("What up, COFFEE?!")

export const Coffee = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="coffeeMain">
            <div className="quadrantImg">
                <div className="coffeeHome">

                    <section className="brewSelectionArea">

                        <Button className="brewMethod" variant="primary" onClick={handleShow}>
                            <img src={FrenchPress} alt="French Press Icon" />
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>French Press</Modal.Title>
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

                    </section>


                    <section className="currentBrewSettings">
                        <div className="savedBrew">24oz | 42g</div>
                    </section>

                </div>
            </div>
        </div >
    )
}