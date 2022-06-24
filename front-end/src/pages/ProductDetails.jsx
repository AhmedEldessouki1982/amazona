import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss';
import Rating from '../components/rating/Rating';


export default function ProductDetails(props) {
   
    let {product} = useParams ();

    //by destructure of slug property from the data object
    let selectedProduct = props.data.theData.find (
        ({slug}) => slug === product
    );

    return (
        <>
            <h1 className='product__title'>{product}</h1>

            <div className='product__container'>
                <div className='product__pic'>
                    <img src= {selectedProduct.image} alt={selectedProduct.slug}/>
                </div>

                <div className='product__details'>
                    <p>{product}</p>

                    <div className='rating'>
                        <Rating rate= {selectedProduct.rating}/>
                        {selectedProduct.numReviews} reviews
                    </div>

                    <div className='pricing'>
                        <span> Price: ${selectedProduct.price}</span>
                        <span className='Description'> Description:  {selectedProduct.description}</span>
                    </div>
                </div>

                <div className='product__status'></div>
            </div>
        </>
    )
}