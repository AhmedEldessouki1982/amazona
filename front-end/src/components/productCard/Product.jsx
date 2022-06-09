import React from 'react';
import './product.scss';


export default function Product (props) {
    let thePic = props.pic;
    return (
        <div className='Product__container'>
            <img src= {thePic} alt={props.slug}/>
            <a href="/"> { props.link } </a>
            <p> ${props.price} </p>
            <button> Add to Cart</button> 
        </div>
    )
}