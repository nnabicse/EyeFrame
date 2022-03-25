import React from 'react';
import logo from '../../images/logo_tp.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <img className='header-image' src={logo} alt="site logo" />
            </nav>
        </div>
    );
};

export default Header;