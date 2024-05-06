import { useNavigate } from 'react-router-dom';
import './Logo.css'
import logoCalendar from '../../assets/image/header/logo/logo1.jpg'
import RYANA8 from '../../assets/image/logo/RYANA8.png'
import React from 'react';
// import logo from '../../assets/image/header/logo/logo.jpg'



function Logo(props) {
    const navigate = useNavigate()
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