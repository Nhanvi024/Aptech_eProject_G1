import './NavBar.css'
import aboutUsIcon from '../../assets/image/header/icon/aboutus.svg'

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {

    const navLink = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'CALENDAR', href: '/calendar' },
        { name: 'NOTE BOOK', href: '/notebook' },
        { name: 'CONTACT', href: '/contact' },

    ]
    const [btnActive, setBtnActive] = useState(navLink[0].name)

const handleMouseOver = (e) =>{
    const {name} = e.target
    
}

    return (
        <div className='navbarContainer'>
            <ul className="navBarTab">
                {navLink.map((item, index) => {
                    return (
                        <li key={index}  className="navItem">
                            <NavLink className='navLink'
                                onClick={(e) => setBtnActive(e.target.name)}
                                onMouseOver={(e)=>handleMouseOver(e)}
                                name={item.name}
                                active={btnActive === item.name ? 'true' : 'false'}
                                to={item.href} >{item.name}</NavLink>
                          <div className='listType'>
                                <h1></h1>
                            </div>
                        </li>
                    )
                })}
            </ul >

            


      
        </div >
    );
}

export default NavBar;