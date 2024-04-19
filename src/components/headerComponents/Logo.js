import './Logo.css'

import React from 'react';
import logo from '../../assets/image/header/logo/logo.jpg'



function Logo(props) {
    return (
        <div className='logoContainer'>
            <img className='logoImage' src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/logo.png?1711094550864' alt='logo'/>
            
        </div>
    );
}

export default Logo;