import { useNavigate } from 'react-router-dom';
import './Logo.css'
import React from 'react';
// import logo from '../../assets/image/header/logo/logo.jpg'



function Logo(props) {
    const navigate = useNavigate()
    return (
        <div className='logoContainer'>
            <img className='logoImage' 
            onClick={()=>navigate('/')}
            src='/assets/image//logo/logo.jpg'
            alt='logo'/>
            
        </div>
    );
}

export default Logo;