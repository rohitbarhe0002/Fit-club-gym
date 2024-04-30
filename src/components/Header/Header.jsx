import React from 'react';
import Logo from '../../assets/logo.png';
import './header.css';
function Header() {
    return (
        <div className='header'>
            <img src={Logo} className='logo' />
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testmimonials</li>
            </ul>
        </div>
    )
}

export default Header