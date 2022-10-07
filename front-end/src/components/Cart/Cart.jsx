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
                                        <button>+</button>
                                        <p>{selectedProduct.price}</p>
                                        <button>-</button>
                                    </span>
                                <h4>{`Total for this item ${1500}$`}</h4>
                            </div>
                        </div>
                    )
                )
            }
            </div>
        </>
    )
}