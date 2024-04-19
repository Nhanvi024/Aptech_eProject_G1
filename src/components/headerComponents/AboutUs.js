import './AboutUs.css'
import aboutUsIcon from '../../assets/image/header/icon/aboutus.svg'

import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs(props) {
    return (
        <div className='aboutUsContainer'>
            <img className='aboutUsIcon' src={aboutUsIcon} alt='aboutUsIcon'/>
            <Link className='aboutUsBtn'>ABOUT US</Link>
            
        </div>
    );
}

export default AboutUs;