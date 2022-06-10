import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    let {product} = useParams ();
    return (
        <h1>{product}</h1>
    )
}