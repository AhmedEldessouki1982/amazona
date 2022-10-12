import React from 'react';
import './Cart.scss'
import { Store } from '../Store/Storeprovider';

export default function Cart (props) {
    let storeContext = React.useContext (Store);
    let itemsQTY = storeContext.storeState.qty;

    let theSelectedItems = props.data.theData.filter (
        product => {
            return Object.keys(itemsQTY).find(
                thisItem => thisItem === product.slug 
            )
        }
    )
    return (
        <>
            <h1>cart</h1>
            <div className='cart__container'>
            {
                theSelectedItems.map (
                    selectedProduct => (
                        <div key = {selectedProduct.slug} className='cart_product_details'>
                            <img src= {selectedProduct.image} alt="product-pic" />
                                <div>
                                    <p>{selectedProduct.slug}</p>
                                    <span>
                                        <p style = {{color:"blue"}}>{`unit price ${selectedProduct.price}$`}</p>
                                    </span>
                                {
                                    Object.keys(itemsQTY).map(
                                        item => (
                                            selectedProduct.slug === item &&
                                            <h4 key ={item}>QTY:{itemsQTY[item]} / 
                                            Total Price: {itemsQTY[item]*selectedProduct.price}$</h4>
                                        )
                                    )
                                }                                
                            </div>
                        </div>
                    )
                )
            }
            </div>
        </>
    )
}