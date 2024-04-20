import './Header.css'

import React from 'react';

import SearchBox from './headerComponents/SearchBox';
import NavBar from './headerComponents/NavBar';
import Logo from './headerComponents/Logo';
import Menu from './headerComponents/Menu';
import LogIn from './headerComponents/LogIn';
import CartList from './headerComponents/CartList';
import AboutUs from './headerComponents/AboutUs';


function Header(props) {
    return (
        <div className='headerContainer'>

            <div className='headerContainer_row1 row'>
                <Logo />
                <SearchBox />
                <LogIn />
                <CartList />
            </div>
            <div className='headerContainer_row2 row'>
                <Menu />
                <NavBar />
                <AboutUs/>
            </div>

        </div>
    );
}

export default Header;