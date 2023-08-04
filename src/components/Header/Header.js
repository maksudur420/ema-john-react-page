import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className="menu">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Inventory</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
};

export default Header;