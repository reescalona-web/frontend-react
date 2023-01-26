import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Productos from './components/Productos';
import libros from './datos/peliculas';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import AddProduct from './components/AddProduct';




function App() {
  const [productos, setProductos] = useState([])

  const getAllProducts = async () => {
    try {
      const prod = await axios("https://fakestoreapi.com/products");
      setProductos(prod.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const addProductArray = (p) => {
    productos.push(p);
    console.log(productos)
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <>
      <AddProduct addProductArray={addProductArray}/>
      <Productos productos={productos} />
    </>
  );
}

export default App;
