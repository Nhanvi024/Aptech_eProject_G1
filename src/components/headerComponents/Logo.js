import './Logo.css'
import logoCalendar from '../../assets/image/header/logo/logo1.jpg'
import RYANA8 from '../../assets/image/logo/RYANA8.png'
import React from 'react';
// import logo from '../../assets/image/header/logo/logo.jpg'



function Logo(props) {
    return (
        <div className='logoContainer'>
            <img className='logoImage' 
            src={RYANA8} 
            // src={logoCalendar}

            alt='logo'/>
            
        </div>
    );
}

export default Logo;