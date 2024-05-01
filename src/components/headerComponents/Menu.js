import './Menu.css'
import arrowIcon from '../../assets/image/header/icon/arrow.svg'

import React, { useContext, useEffect, useState } from 'react';
import MenuIcon from '../../assets/image/header/icon/menuIcon.svg'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

function Menu(props) {

    const { setBtnActive } = useContext(DataContext)
    const menuDetail = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'ALL PRODUCTS', href: '/allproducts' },
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
                        <div key={index} className='menuTab' id={`menuTab_${index}`} onClick={(e) => console.log(e.target.id)}>
                            <div className='iconRedArrow' />
                            <Link className='tabLink' onClick={() => setBtnActive(item.name)} to={item.href}>{item.name}</Link>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Menu;