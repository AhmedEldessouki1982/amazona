import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss'

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

                <div className='product__details'></div>
                <div className='product__status'></div>
            </div>
        </>
    )
}