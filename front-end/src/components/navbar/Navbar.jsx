import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store/Storeprovider';
import './navbar.scss';

export default function Navbar () {
    //consume the context
    let storeContext = React.useContext (Store);
    return (
        <>
            <div className='Navbar__header'>
                <Link to="/">Amazona</Link>

                <div className='Navbar__icons'>
                    <span>Cart
                        {
                            storeContext.storeState.cart.length > 0 && 
                            <span>
                                {storeContext.storeState.cart.length}
                            </span>
                        }
                    </span>
                </div>
            </div>
        </>
    )
}