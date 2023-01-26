import React, { useState, useEffect, useReducer } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const AddProduct = ({addProductArray}) => {
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [producto, setProducto] = useReducer(
        (state, setState) => ({ ...state, ...setState }),
        {
            title: "",
            price: 0,
            description: "",
            image: "",
            category: ""
        })

    const getALLCategories = async () => {
        const c = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(c.data);
    }

    const AddProduct = async () => {
        const resp = await axios.post('https://fakestoreapi.com/products',producto);
        console.log(resp.data);
        const prod = await axios("https://fakestoreapi.com/products");
        addProductArray(resp.data)
        console.log(prod)
        handleClose();
    }

    useEffect(() => {
        getALLCategories();
    }, [])

    return (
        <>
            <Button variant='primary' onClick={handleShow} >Añadir producto</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Title of Product"
                                            onChange={(e) => { setProducto({ title: e.target.value }) }}
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput2"
                                    >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="number"
                                            onChange={(e) => { setProducto({ price: e.target.value }) }}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Title of Product"
                                            onChange={(e) => { setProducto({ description: e.target.value }) }}
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput2"
                                    >
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) => { setProducto({ image: e.target.value }) }}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                            <Form.Select id="disabledSelect" onChange={(e)=>{setProducto({ category: e.target.value })}}>
                                {
                                    categories.map((categorie) => {
                                        return (
                                            <option>{categorie}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={AddProduct}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProduct