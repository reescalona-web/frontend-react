import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import peliculas from '../datos/peliculas'
import shiddharta from '../assets/siddhartha.jpg'
import { Modal } from 'bootstrap';
import ModalProduct from './ModalProduct';


const Producto = ({ producto }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => {
        console.log("neindeinedini")
        setShow(false)
        console.log(show)
    }
    return (
        <>
            <div style={{ padding: '16px' }} onClick={()=>setShow(true)}>
                <Card style={{ boxShadow: '5px 5px 5px black' }}>
                    <Card.Img variant="top" src={producto.image} style={{ width: '280px', height: '200px' }} />
                    <Card.Body>
                        <Card.Text>
                            <strong>Precio: ${producto.price}</strong>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <ModalProduct show={show} handleClose={handleClose} producto={producto} />
        </>
    )
}

export default Producto