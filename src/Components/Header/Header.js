import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div>
                    <h1>Cars~House</h1>
                </div>
                <div>
                    <a href="">Shop</a>
                    <a href="">About</a>
                    <a href="">Orders</a>
                    <a href="">Review</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;