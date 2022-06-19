import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import './product.scss';
export default function Product (props) {
    let thePic = props.pic;
    return (
        <div className='Product__container'>
            <img src= {thePic} alt={props.slug}/>
            <Link to={`/products/${props.slug}`}> { props.link } </Link>
            <p> ${props.price} </p>
            <Rating rate = {props.rate}/>
            <button> Add to Cart</button> 
        </div>
    )
}