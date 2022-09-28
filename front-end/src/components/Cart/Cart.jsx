import React from 'react';
import { Store } from '../Store/Storeprovider';


export default function Cart () {
    let storeContext = React.useContext (Store);
    let itemsQTY = storeContext.storeState.qty;

    return (
        <>
            <h1>cart</h1>
            {
                Object.keys(itemsQTY).map(
                    item => (
                        <h3 key= {item}>{item}: {itemsQTY[item]}</h3>
                    )
                )
            }
        </>
    )
}