import './Logo.css'
import React from 'react';
// import logo from '../../assets/image/header/logo/logo.jpg'



function Logo(props) {
    return (
        <div className='logoContainer'>
            <img className='logoImage' 
    
            src='/assets/image//logo/logo.jpg'
            alt='logo'/>
            
        </div>
    );
}

export default Logo;