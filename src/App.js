import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';


function App() {
  const product = [
    {
      price: 9990,
      name: "iPhone 10S Max",
      quantity: 0,
    },
    {
      price: 990,
      name: "Redmi Note 10",
      quantity: 0,
    }
  ]
  return (
    <>
    <Navbar title = "This Is Title"/>
    <ProductList product={product}/>

    {/* <Footer/> */}
    </>
  );
}

export default App;
