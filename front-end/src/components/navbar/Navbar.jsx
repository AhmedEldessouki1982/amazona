import React from 'react';
import { Link } from 'react-router-dom';
import removeDublicates from '../../utils/removeDublicate';
import { Store } from '../Store/Storeprovider';
import './navbar.scss';

export default function Navbar () {

    //consume the context
    let storeContext = React.useContext (Store);
    let cartDetails = removeDublicates(storeContext.storeState.cart);

     let onClickCartHandler = () => {
        storeContext.dispatch ({
            type: "CART_DETAILS",
            cartDetails: cartDetails
        })
     }

    return (
        <>
            <div className='Navbar__header'>
                <Link to="/">Amazona</Link>
                <Link to="/cart">
                    <div className='Navbar__icons' onClick={onClickCartHandler}>
                        <span>Cart
                            {
                                storeContext.storeState.cart.length > 0 && 
                                <span>
                                    {storeContext.storeState.cart.length}
                                </span>
                            }
                        </span>
                    </div>
                </Link>
            </div>
        </>
    )
}