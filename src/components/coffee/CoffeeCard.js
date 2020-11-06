import React, { useState, useRef } from "react"
import "./Coffee.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


export const CoffeeCard = ({ coffee }) => {

    const [show, setShow] = useState(false);
    const [selectedBrew, setSelectedBrew] = useState({
        brewId: coffee.id,
        grams: 0
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const waterInput = useRef(null)



    const handleCalculatedInput = (event) => {
        const gramsOutput = (waterInput.current.value * 28) / coffee.ratio
        console.log("waterInput", waterInput.current.value)
        const newSelectedBrewMethod = { ...selectedBrew }
        newSelectedBrewMethod.grams = gramsOutput
        setSelectedBrew(newSelectedBrewMethod)
    }

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
                        <input type="number" name="water" className="form-control"
                            placeholder="Ounces of Water (i.e. 24)"
                            ref={waterInput} />
                    </fieldset>
                    <h5 className="modal--heading">Grams of Coffee: </h5>
                    <fieldset className="result--readOnly">
                        <input type="number" name="grams" className="form-control"
                            value={selectedBrew.grams}
                            readOnly />
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" size="sm" block onClick={handleCalculatedInput}>
                        Calculate
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}