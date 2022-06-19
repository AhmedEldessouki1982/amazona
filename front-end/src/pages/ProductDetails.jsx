import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from './../components/rating/Rating'
import './ProductDetails.scss'

export default function ProductDetails() {
    let {product} = useParams ();
    return (
        <>
            <h1>{product}</h1>
        </>
    )
}