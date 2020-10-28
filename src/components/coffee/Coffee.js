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
                            <img src={FrenchPress} />
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>





                        <div className="brewMethod"><img src={Drip} /></div>
                        <div className="brewMethod"><img src={Espresso} /></div>
                        <div className="brewMethod"><img src={Chemex} /></div>
                    </section>
                    <section className="currentBrewSettings">
                        {/* <div>Brew Method: </div>
                        <div>Water Amount: </div>
                        <div>Grams of Coffee: </div> */}
                        <div className="savedBrew">24oz | 42g</div>
                    </section>
                </div>
            </div>
        </div>
    )
}