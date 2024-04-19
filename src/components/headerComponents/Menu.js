import './Menu.css'
import arrowIcon from '../../assets/image/header/icon/arrow.svg'

import React, { useState } from 'react';
import MenuIcon from '../../assets/image/header/icon/menuIcon.svg'
import { NavLink } from 'react-router-dom';

function Menu(props) {

    const menuDetail = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'PRODUCTS', href: '/allproducts' },
        { name: 'DOWNLOAD', href: '/download' },
        { name: 'CONTACT', href: '/contact' },

    ]


    return (
        <div className='menuContainer'>
            <div className='menuButton'>
                <img className='menuIcon' src={MenuIcon} alt='menuIcon' />
                <p className='menuText'>Menu</p>
            </div>
            <div className='menuDetail'>
                {menuDetail.map((item, index) => {
                    return (
                        <>
                            <img className='arrowIcon' src={arrowIcon} alt='arrowIcon' />
                            <NavLink className='menuTab' to={item.href}>{item.name}</NavLink>
                        </>
                    )
                })}

            </div>
        </div>
    );
}

export default Menu;