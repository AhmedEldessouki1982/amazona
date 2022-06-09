import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Product from './components/productCard/Product';
import {data} from './utils/data';

export default function App() {
  let theData = data.products;
  return (
    <>
      <Navbar />
      
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
    </>
  );
}