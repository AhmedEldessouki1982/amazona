import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar () {
    return (
        <>
            <div className='Navbar__header'>
                <Link to="/">Amazona</Link> 
            </div>
        </>
    )
}