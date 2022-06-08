import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Product from './components/productCard/Product';

export default function App() {
  return (
    <>
      <Navbar />
      <Product/>
    </>
  );
}