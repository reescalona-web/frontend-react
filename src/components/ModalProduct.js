import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const ModalProduct = ({ show, handleClose, producto }) => {
        
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <img style={{width:'500px',height:'300px'}} src={producto.image}/>
                </Modal.Header>
                <Modal.Body>
                    <strong>{producto.title}</strong>
                    <strong style={{paddingLeft:'20px'}}>Precio:${producto.price}</strong><br/>
                    Description:{producto.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalProduct;