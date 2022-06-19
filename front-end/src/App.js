import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar'
import Product from './components/productCard/Product';
import ProductDetails from './pages/ProductDetails';
import { Routes , Route} from 'react-router-dom';
import axios from 'axios';

export default function App() {
  let [products , setProducts] = React.useState([]);
  React.useEffect (
    () => {
      const fetchData = async () => {
        const result = await axios.get ('/api/products');
        setProducts (result.data);
      };
      fetchData();
    },[]
  );

  let theData = products;
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
                  rate = {product.rating}
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