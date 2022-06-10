import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Product from './components/productCard/Product';
import { Routes , Route} from 'react-router-dom';

import {data} from './utils/data';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  let theData = data.products;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element = {
          <div className='featured__products'>
            {
              theData.map (
                (product,id) => (
                  <Product
                  key={id}
                  pic = {product.image}
                  link = {product.name}
                  price = {product.price}
                  slug = {product.slug}
                  />
                )
              )
            }
          </div>
        }/>
        <Route path='/products/:product' element = { <ProductDetails/> } />
      </Routes>
    </>
  );
}