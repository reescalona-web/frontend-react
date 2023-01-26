import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import Producto from './Producto';
import ModalProduct from './ModalProduct';

const Productos = ({ productos }) => {
    const [produc, setProductos] = useState(productos)

    return (
        <>
            <Row className='justify-content-md-center'>
                {productos.map(producto => {
                    return (
                        <>
                            <Col md={4} style={{ width: '300px', height: '300px' }}>
                                <Producto key={producto.id} producto={producto} />
                            </Col>
                        </>
                    )
                })}
            </Row>
        </>
    );
}

export default Productos